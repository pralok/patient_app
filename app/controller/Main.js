Ext.define('WireFrameTwo.controller.Main',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.MenuBar','WireFrameTwo.view.myDoctor.DoctorProfile',
        'WireFrameTwo.view.myProfile.MyProfile','WireFrameTwo.view.reports.ReportsHome'],

        stores : ['SessionStore',
            'HBAstore','FBGstore','DBPstore','PPGstore','RBSstore','SBPstore'],

        refs : {
            //views
            MenuBar : 'menu',
            loginpage : 'loginPage',
            homePageView : 'newslist',
            doctorProfile : 'doctorProfile',
            myProfile : 'myProfile',
            reportView : 'myReports',

            //buttons
            homePageButton : 'menu button[action="homeview"]',
            logout : 'menu button[action=logout]',
            MenuButton : 'toolbarmenu button[action="MenuButton"]',
            MyDoctorButton : 'menu button[action="viewMyDoctor"]',
            MyProfileButton : 'menu button[action="profile"]',
            MyReportButton : 'menu button[action="viewReports"]'

        },

        control : {
            MenuButton : {
                tap : 'onMenuTap'
            },

            homePageButton : {
                tap : 'onHomePageTap'
            },
            MyDoctorButton : {
                tap : 'OnViewMyDoctor'
            },
            MyProfileButton : {
                tap : 'onMyProfileTap'
            },
            MyReportButton : {
               tap : 'onMyReportTap'
            },
            logout :{
                tap : 'onLogOut'
            }

        }
    },
    onMenuTap : function(){
        var MyMenu = this.getMenuBar();
        if(MyMenu.isHidden()){
            Ext.Viewport.showMenu('left');
        }else{
            Ext.Viewport.hideMenu('left');
        }
    },

    onLogOut : function(){
        var myStore = Ext.getStore('SessionStore');
        myStore.removeAll();
        myStore.sync();

        var loginPage = this.getLoginpage();
        if(loginPage === undefined){
            Ext.create('WireFrameTwo.view.login.LoginPage');
            loginPage = this.getLoginpage();
        }
        this.changeView(loginPage);
    },

    onHomePageTap : function(){
        var Home = this.getHomePageView();
        this.changeView(Home);
    },

    OnViewMyDoctor : function(){

        var me = this;
        //get session store
        var SessionStore = Ext.getStore('SessionStore');

        // get ref id
        var myRefId = SessionStore.getAt(0).getData().refID;

        //make an ajax request with ref id
        Ext.Ajax.request({
            url: 'DoctorInfo.json',
            method: 'post',
            params: {
                refId : myRefId
            },

            success: function (response) {
                var result = Ext.JSON.decode(response.responseText).profile;
                if (result.success === true) {
                    //get values
                    var Name = result.fname + ' ' + result.lname;
                    var Degrees = result.degrees;
                    var Specialities = result.specialities;
                    var Experience = result.experience;
                    var Email = result.email;
                    var Address = result.address;
                    var ClinicNo = result.clinic_contact;
                    var PersonalNo = result.mobile_contact;

                    // create new view
                    Ext.create('WireFrameTwo.view.myDoctor.DoctorProfile');

                    //set values
                    var DoctorPage = me.getDoctorProfile();
                    DoctorPage.down('panel').setHtml('Dr. '+ Name);
                    DoctorPage.down('textfield[label="Degrees"]').setValue(Degrees);
                    DoctorPage.down('textfield[label="Specialities"]').setValue(Specialities);
                    DoctorPage.down('textareafield[label="Address"]').setValue(Address);
                    DoctorPage.down('textfield[label="Contact"]').setValue(ClinicNo);
                    DoctorPage.down('textfield[label="Experience"]').setValue(Experience + ' Years');
                    DoctorPage.down('textfield[label="Email"]').setValue(Email);
                    DoctorPage.down('textfield[label="Phone"]').setValue(PersonalNo);//PersonalNo

                    //change view
                    me.changeView(DoctorPage);
                } else {
                    // show failure msg
                    console.log("login failed");
                }
            },
            failure: function () {
                // show connection error
                console.log("connection error");
            }
        })
    },

    onMyProfileTap : function(){
        var me = this;

        //get session store
        var SessionStore = Ext.getStore('SessionStore');

        // get ref id
        var myRefId = SessionStore.getAt(0).getData().refID;

        //make an ajax request with ref id
        Ext.Ajax.request({
            url: 'MyProfileInfo.json',
            method: 'post',
            params: {
                refId: myRefId
            },

            success: function (response) {
                var result = Ext.JSON.decode(response.responseText).profile;

                if (result.success === true) {
                    //get values from return object
                    var myHtmlString = result.fname + ' ' + result.lname + '(' +
                        result.gender + ')' + '<br/>' + result.age + ' years' + '<br/>' +
                        result.diabetes_type;

                    var diab_type = result.diabetes_type;
                    var allergy = result.allergy;
                    var med_history = result.medical_history;
                    var address = result.Address;
                    var mobile_no = result.mobile_contact;
                    var emer_cont = result.emergency_contact;

                    //create view
                    Ext.create('WireFrameTwo.view.myProfile.MyProfile');

                    //set values
                    var ProfileView = me.getMyProfile();
                    ProfileView.down('panel').setHtml(myHtmlString);
                    ProfileView.down('fieldset textfield[name="diab_type"]').setValue(diab_type);
                    ProfileView.down('fieldset textareafield[name="allergy"]').setValue(allergy);
                    ProfileView.down('fieldset textareafield[name="med_history"]').setValue(med_history);
                    ProfileView.down('fieldset textareafield[name="address"]').setValue(address);
                    ProfileView.down('fieldset textfield[name="mobile_no"]').setValue(mobile_no);
                    ProfileView.down('fieldset textfield[name="emer_cont"]').setValue(emer_cont);

                    //change view
                    me.changeView(ProfileView);

                }else{
                    // show failure msg
                    console.log("login failed");
                }

            },failure: function () {
                // show connection error
                console.log("connection error");
            }
        })
    },

    onMyReportTap : function(){
        Ext.create('WireFrameTwo.view.reports.ReportsHome');

        var ReportView = this.getReportView();

        this.changeView(ReportView);
    },

    changeView : function(NewView){
        Ext.Viewport.hideMenu('left');

        Ext.Viewport.animateActiveItem(NewView,{
            type : 'fade'
        });
    }
})
