Ext.define('WireFrameTwo.controller.Profile',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.myProfile.MyProfileEdit','WireFrameTwo.view.myProfile.MyProfile'],
        refs : {
            //views
            profileView : 'myProfile',
            editProfile : 'profileEdit',

            //button
            editButton : 'myProfile toolbarmenu button[action="edit"]',
            saveButton : 'profileEdit toolbar button[action="save"]',
            cancelButton : 'profileEdit toolbar button[action="hide"]',

            'fileBtn': 'profileEdit #fileBtn',
            'fileLoadBtn': 'profileEdit #fileLoadBtn',
            'loadedImage': 'profileEdit #loadedImage'
        },
        control : {
            editButton : {
                tap : 'onProfileEdit'
            },
            cancelButton : {
                tap : 'onHideProfile'
            },
            saveButton : {
                tap : 'onSaveProfile'
            },

            fileBtn: {
                success: 'onFileUploadSuccess',
                failure: 'onFileUploadFailure'
            },

            fileLoadBtn: {
                loadsuccess: 'onFileLoadSuccess',
                loadfailure: 'onFileLoadFailure'
            }
        }
    },

    onProfileEdit : function(){
        var me = this;

        //get session store
        var SessionStore = Ext.getStore('SessionStore');

        // get ref id
        var myRefId = SessionStore.getAt(0).getData().refID;


        //make an ajax request with ref id
        Ext.Ajax.request({
            url: 'http://squer.mirealux.com/wdm-pm-api/user-info',
            method: 'post',
            params: {
              reference_id : myRefId,
              timestamp : new Date().getTime()
            },

            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);

                if (result.success === true) {
                  result = result.data;
                  console.log(result);

                    //get values
                    var fname = result.fname;
                    var lname = result.lname;
                    var gender = result.gender;
                    var dob = result.age.year;
                    var diab_type = result.diabetes_type || "";
                    var allergy = result.allergy || "";
                    var med_history = result.medical_history || "";
                    var address = result.address || "";
                    var mobile_no = result.contact_no || "";
                    var emer_cont = result.contact_emergency || "";

                    //create view
                    Ext.create('WireFrameTwo.view.myProfile.MyProfileEdit');
                    var EditView = me.getEditProfile();

                    //set values
                    EditView.down('textfield[name="fName"]').setValue(fname);
                    EditView.down('textfield[name="lname"]').setValue(lname);
                    EditView.down('textfield[name="dob"]').getComponent().setValue(dob);
                    EditView.down('selectfield[name="gender"]').setValue(gender);
                    EditView.down('selectfield[name="diab_type"]').setValue(diab_type);
                    EditView.down('textareafield[name="allergy"]').setValue(allergy);
                    EditView.down('textareafield[name="history"]').setValue(med_history);
                    EditView.down('textareafield[name="address"]').setValue(address);
                    EditView.down('numberfield[name="contact"]').setValue(mobile_no);
                    EditView.down('numberfield[name="emg_contact"]').setValue(emer_cont);

                    //change view
                    me.changeView(EditView,'up');
                }
            }
        })
        //create edit view
        Ext.create('WireFrameTwo.view.myProfile.MyProfileEdit');
    },

    onSaveProfile : function(){
        var me = this;

        //get session store
        var SessionStore = Ext.getStore('SessionStore');

        // get ref id
        var myRefId = SessionStore.getAt(0).getData().refID;

        var EditView = this.getEditProfile().getValues();

        var today = new Date();
        var birthDate = new Date(EditView.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }


        //get form handle
        var EditView = this.getEditProfile().getValues();
        var UpdateData = {
          fname : EditView.fName,
          lname : EditView.lname,
          gender : EditView.gender,
          dob : EditView.dob,
          diabetes_type : EditView.diab_type,
          Allergy : EditView.allergy,
          medical_history : EditView.history,
          contact : EditView.contact,
          address : EditView.address,
          contact_emergency : EditView.emg_contact
        };

        console.log(UpdateData);
        //submit request
        Ext.Ajax.request({
            url: 'http://squer.mirealux.com/wdm-pm-api/update-profile',//'UserProfileUpdate.json'
            method: 'post',
            params: {
                reference_id : myRefId,
                timestamp : new Date().getTime(),
                data : Ext.util.JSON.encode(UpdateData)
            },
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);

                if (result.success === true) {
                    //get user profile info
                    result = UpdateData;

                    var myHtmlString = result.fname + ' ' + result.lname + '(' +
                        result.gender + ')' + '<br/>' + age + ' years' ;
                        //+ '<br/>' + result.diabetes_type;

                    var diab_type = result.diabetes_type;
                    var allergy = result.Allergy;
                    var med_history = result.medical_history;
                    var address = result.address;
                    var mobile_no = result.contact;
                    var emer_cont = result.contact_emergency;

                    //create view
                    Ext.create('WireFrameTwo.view.myProfile.MyProfile');

                    //set values
                    var ProfileView = me.getProfileView();
                    ProfileView.down('panel').setHtml(myHtmlString);
                    ProfileView.down('fieldset textfield[name="diab_type"]').setValue(diab_type);
                    ProfileView.down('fieldset textareafield[name="allergy"]').setValue(allergy);
                    ProfileView.down('fieldset textareafield[name="med_history"]').setValue(med_history);
                    ProfileView.down('fieldset textareafield[name="address"]').setValue(address);
                    ProfileView.down('fieldset textfield[name="mobile_no"]').setValue(mobile_no);
                    ProfileView.down('fieldset textfield[name="emer_cont"]').setValue(emer_cont);

                    //change view
                    Ext.Viewport.animateActiveItem(ProfileView,{
                            direction : 'down',
                            type : 'slide'
                    });
                } else {
                    // show failure msg
                    console.log("update failed");
                }
            },
            failure: function () {
                // show connection error
                console.log("connection error");
            }
        });

        //hide view
//        this.onHideProfile();
    },

    onFileUploadSuccess: function() {
        console.log('Success');

        Ext.device.Notification.show({
            title: 'All right',
            message: 'File uploaded successfully',
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },

    onFileUploadFailure: function(message) {
        console.log('Failure');

        Ext.device.Notification.show({
            title: 'Uploading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },

    onFileLoadSuccess: function(dataurl, e) {
        console.log('File loaded');

        var me = this;
        var image = me.getLoadedImage();
        image.setSrc(dataurl);
    },

    onFileLoadFailure: function(message) {
        Ext.device.Notification.show({
            title: 'Loading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },

    onHideProfile : function(){

        var ProfileView = this.getProfileView();
        this.changeView(ProfileView,'down');
    },

    changeView : function(view,direction){
        Ext.Viewport.animateActiveItem(view,{
            type : 'slide',
            direction : direction
        });
    }
})
