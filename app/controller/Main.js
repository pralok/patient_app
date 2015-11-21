Ext.define('WireFrameTwo.controller.Main',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.MenuBar','WireFrameTwo.view.myDoctor.DoctorProfile',
        'WireFrameTwo.view.myProfile.MyProfile','WireFrameTwo.view.Alarms.AlarmsHome',
        'WireFrameTwo.view.reports.ReportsHome','WireFrameTwo.view.news.FeedsPage',
      'WireFrameTwo.view.notifications.notifications'],

        stores : ['SessionStore','AlarmsStore',
            'HBAstore','FBGstore','DBPstore','PPGstore','RBSstore','SBPstore',
          'WeightStore','BPStore'],

        refs : {
            //views
            MenuBar : 'menu',
            loginpage : 'loginPage',
            doctorProfile : 'doctorProfile',
            myProfile : 'myProfile',
            reportView : 'myReports',
            alarmView : 'alarmHome',
            feedsView : 'feedsHome',
            notsView : 'notifications',

            //buttons
            logout : 'menu button[action=logout]',
            MenuButton : 'toolbarmenu button[action="MenuButton"]',
            MyDoctorButton : 'menu button[action="viewMyDoctor"]',
            MyProfileButton : 'menu button[action="profile"]',
            MyReportButton : 'menu button[action="viewReports"]',
            ReminderButton : 'menu button[action="reminders"]',
            NotsButton : 'menu button[action="viewNotifications"]',
            FeedsButton : 'menu button[action="feeds"]'

        },

        control : {
            MenuButton : {
                tap : 'onMenuTap'
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
            },
            ReminderButton : {
                tap : 'onReminderTap'
            },
            FeedsButton : {
              tap : 'onFeedTap'
            },
            NotsButton : {
              tap : 'onNotsTap'
            }

        }
    },
    onNotsTap : function(){
      Ext.create('WireFrameTwo.view.notifications.notifications');
      var NotsView = this.getNotsView();
      this.changeView(NotsView);
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

      //get session store
      var SessionStore = Ext.getStore('SessionStore');
      // get ref id
      var myRefId = SessionStore.getAt(0).getData().refID;


      Ext.Ajax.request({
        url: 'http://squer.mirealux.com/wdm-pm-api/logout',//abc-abc
        method: 'post',
        params: {
          reference_id : myRefId,
          timestamp : new Date().getTime()
        },
        success: function (response) {
          var result = Ext.JSON.decode(response.responseText);
          if (result.success === true) {
            console.log("logged out");
          } else {
            console.log(result.message);
          }
        },
        failure: function () {
          // show connection error loginError
          console.log("connection error");
        }
      });

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

        console.log(myRefId);
        //make an ajax request with ref id
        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: 'http://squer.mirealux.com/wdm-pm-api/user-info',//'UserProfileUpdate.json',
            method: 'post',
            params: {
                reference_id : myRefId,
                timestamp : new Date().getTime()
            },

            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);//.profile;
                console.log(result);

                if (result.success === true) {
                  result = result.data;
                  console.log(result);
                  var diab_type = result.diabetes_type || "";
                  var allergy = result.allergy || "";
                  var med_history = result.medical_history || "";
                  var address = result.address || "";
                  var mobile_no = result.contact_no || "";
                  var emer_cont = result.contact_emergency || "";

                    //get values from return object
                    var myHtmlString = result.fname + ' ' + result.lname + ' (' +
                        result.gender + ')' + '<br/>' + result.age.year + ' years' + '<br/>';
                        //+ diab_type;

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
                    console.log("loading profile failed");
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

    onReminderTap : function(){
        Ext.create('WireFrameTwo.view.Alarms.AlarmsHome');
        var AlarmView = this.getAlarmView();
        this.changeView(AlarmView);
    },

    onFeedTap : function(){
      Ext.create('WireFrameTwo.view.news.FeedsPage');
      var FeedsView = this.getFeedsView();
      this.changeView(FeedsView);
    },

    changeView : function(NewView){
        Ext.Viewport.hideMenu('left');

        Ext.Viewport.animateActiveItem(NewView,{
            type : 'fade'
        });
    }
})
