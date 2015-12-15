Ext.define('WireFrameTwo.controller.Home',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.home.HomePage',
        'WireFrameTwo.view.myProfile.MyProfile','WireFrameTwo.view.Alarms.AlarmsHome',
        'WireFrameTwo.view.reports.ReportsHome',
      'WireFrameTwo.view.notifications.notifications','WireFrameTwo.view.ToolBar',
      'WireFrameTwo.view.gallery.MediaGallery','WireFrameTwo.view.faq.Faqs',
    'WireFrameTwo.view.dietPlanner.DietPlanner','WireFrameTwo.view.reports.AddNewReport'],

        stores : ['SessionStore','AlarmsStore',
            'HBAstore','FBGstore','DBPstore','PPGstore','RBSstore','SBPstore',
          'WeightStore','BPStore','FastingStore','RandomStore'],

        refs : {
            //views
            homePage : 'homePage',
            loginpage : 'loginPage',
            myProfile : 'myProfile',
            reportView : 'myReports',
            addReport : 'addReport',
            alarmView : 'alarmHome',
            notsView : 'notifications',
            mediaGallery : 'mediaGallery',
            faqs : 'faqs',
            dietPlanner : 'dietPlanner',

            //buttons
            logout : 'toolbar button[action=logout]',
            home : 'toolbarmenu button[action="HomeButton"]',

            //home page sections
            HomePageSections : 'homePage panel panel'
        },

        control : {
          HomePageSections : {
            onMyProfileClick : 'onMyProfileTap',
            onNotifClick : 'onNotsTap',
            onReportClick : 'onMyReportTap',
            onAddReportClick : 'onAddReportTap',
            onDosageClick : 'onReminderTap',
            onGalleryClick : 'onGalleryTap',
            onFaqClick : 'onFaqTap',
            onPlannerClick : 'onPlannerTap'
          },
          home : {
            tap : 'onHomeTap'
          },
          logout :{
              tap : 'onLogOut'
          }
        }
    },
    onHomeTap : function(){
      Ext.create('WireFrameTwo.view.home.HomePage');
      var HomeView = this.getHomePage();

      Ext.Viewport.animateActiveItem(HomeView,{
        type : 'slide',
        direction : 'right'
      });

    },

    onNotsTap : function(){
      //loading mask
      var me = this;
      var task = me.loadMask(me);

      //fetch view data
      Ext.create('WireFrameTwo.view.notifications.notifications');
      var NotsView = me.getNotsView();

      //hiding mask
      task.cancel();
      Ext.Viewport.unmask();

      this.changeView(NotsView);
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

    onMyProfileTap : function(){
        var me = this;

        var task = me.loadMask(me);

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

              //loading mask
              task.cancel();
              Ext.Viewport.unmask();

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
                  //
                  task.cancel();
                  Ext.Viewport.unmask();
                    // show failure msg
                    console.log("loading profile failed");
                }

            },failure: function () {
                // show connection error
                console.log("connection error");
            }
        })
    },
    onAddReportTap : function(){
      Ext.create('WireFrameTwo.view.reports.AddNewReport');
      var AddReportView = this.getAddReport();
      this.changeView(AddReportView);
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

    onPlannerTap : function(){
      console.log("planner tapped");
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.dietPlanner.DietPlanner'));
      var dietPlannerView = this.getDietPlanner();
      this.changeView(dietPlannerView);
    },

    onFaqTap : function(e){
      console.log("FAQ tapped");
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.faq.Faqs'));
      var faqView = this.getFaqs();

      Ext.Viewport.animateActiveItem(faqView,{
        type : 'slide',
        direction : 'left'
      });
    },

    onGalleryTap : function(){
      console.log("gallery tapped");
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.gallery.MediaGallery'));
      var MediaGallery = this.getMediaGallery();
      Ext.Viewport.animateActiveItem(MediaGallery,{
          type : 'slide',
          direction : 'left'
      });
    },

    changeView : function(NewView){
        Ext.Viewport.animateActiveItem(NewView,{
          type : 'slide',
          direction : 'left'
        });
    },

    loadMask : function(me){
      var task = Ext.create('Ext.util.DelayedTask', function() {
          Ext.Viewport.mask({ xtype: 'loadmask',
                             message: "loading.." });
      }, me);
      task.delay(500);
      return task;
    }
})
