Ext.define('WireFrameTwo.controller.Profile',{
  extend : 'Ext.app.Controller',
  requires: ['Ext.Toast'],
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
    var profileView = me.getProfileView();
    var result = profileView.down('panel[itemId="hiddenData"]').getHtml();

    //get values
    var fname = result.fname;
    var lname = result.lname;
    var gender = result.gender;
    var dob = result.dob;//result.age.year;
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
    EditView.down('datepickerfield[name="dob"]').setValue(new Date(dob));
    EditView.down('selectfield[name="gender"]').setValue(gender);
    EditView.down('selectfield[name="diab_type"]').setValue(diab_type);
    EditView.down('textareafield[name="allergy"]').setValue(allergy);
    EditView.down('textareafield[name="history"]').setValue(med_history);
    EditView.down('textareafield[name="address"]').setValue(address);
    EditView.down('numberfield[name="contact"]').setValue(mobile_no);
    EditView.down('numberfield[name="emg_contact"]').setValue(emer_cont);

    //change view
    me.changeView(EditView,'up');
    //create edit view
  },

  onSaveProfile : function(){
    var me = this;

    //load mask
    var task = me.loadMask("Updating Profile..");

    //get session store
    var SessionStore = Ext.getStore('SessionStore');

    // get ref id
    var myRefId = SessionStore.getAt(0).getData().refID;

    var EditView = me.getEditProfile().getValues();

    /*
    var today = new Date();
    var birthDate = new Date(EditView.dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  */

  //get form handle
  var EditView = me.getEditProfile().getValues();
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
    contact_emergency : EditView.emg_contact//,
    //      email : "abc@gmail.com",
    //      age : 15
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
      //hide mask
      task.cancel();
      Ext.Viewport.unmask();

      var result = Ext.JSON.decode(response.responseText);
      /* //for testing function
      var result = {
        "success": true,
        "data": {
          "id": "66",
          "fname": "Priyanka",
          "lname": "Verma",
          "dob": "1999-10-12",
          "gender": "male",
          "diabetes_type": "type1",
          "allergy": "hazelnuts,soya",
          "medical_history": "high glucose level",
          "address": "sencha office",
          "contact_no": "1234554321",
          "contact_emergency": "1234567890",
          "profile_url": "http:\/\/squer.mirealux.com\/wp-content\/uploads\/2015\/11\/yale.jpg",
          "default_threshold": {
            "hba1c": "6.5",
            "fpg": "100",
            "ppg": "120",
            "rbs": "100",
            "sbp": "120",
            "dbp": "80"
          },
          "age": {
            "year": "16",
            "month": "2",
            "day": "24"
          }
        },
        "message": ""
      };
      */
      if (result.success == true){
        result = result.data;
        var ProfileView = me.getApplication().getController('Home').setProfileTemplate(result);

        Ext.Viewport.animateActiveItem(ProfileView,{
          direction : 'down',
          type : 'slide'
        });

      }else{
        // show failure msg
        Ext.toast('unable to update profile');
        console.log("update failed");
      }
    },
    failure: function () {
      //hide mask
      task.cancel();
      Ext.Viewport.unmask();

      // show connection error
      Ext.toast('Please check your connection');
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
},
loadMask : function(msg){
  var task = Ext.create('Ext.util.DelayedTask', function() {
    Ext.Viewport.mask({ xtype: 'loadmask',
    message: msg });
  }, this);

  task.delay(500);
  return task;
}
})

/*
//load profile

//onMyProfileTap
/*
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

*/
