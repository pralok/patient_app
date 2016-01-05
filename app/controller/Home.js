Ext.define('WireFrameTwo.controller.Home',{
  extend : 'Ext.app.Controller',
  requires : ['Ext.Toast'],
  config : {
    views : ['WireFrameTwo.view.home.HomePage',
    'WireFrameTwo.view.myProfile.MyProfile','WireFrameTwo.view.Alarms.AlarmsHome',
    'WireFrameTwo.view.reports.ReportsHome',
    'WireFrameTwo.view.notifications.notifications','WireFrameTwo.view.ToolBar',
    'WireFrameTwo.view.gallery.MediaGallery','WireFrameTwo.view.faq.Faqs',
    'WireFrameTwo.view.dietPlanner.DietPlanner','WireFrameTwo.view.reports.AddNewReport'],

    stores : ['SessionStore','AlarmsStore',
    'HBAstore','FBGstore','DBPstore','PPGstore','RBSstore','SBPstore',
    'WeightStore','BPStore','FastingStore','RandomStore',
    'NotificationStore','CommonChartStore','MediaGalleryStore'],

    refs : {
      //views
      homePage : 'homePage',
      loginpage : 'loginPage',
      myProfile : 'myProfile',

      reportView : 'myReports',
      randomChart : 'myReports random_report_chart',

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

    //get reference_id for the session;
    var reference_id = this.getApplication().getController('RefId').passRefId();

    //make ajax request
    Ext.Ajax.request({
      url: 'resources/data/notifications.json',//'UserProfileUpdate.json',
      method: 'post',
      timeout : 10000,
      params: {
        reference_id : reference_id,
        timestamp : new Date().getTime()
      },
      success : function(response){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);

        if(result.success == true){
          Ext.create('WireFrameTwo.view.notifications.notifications');

          var notifList = me.getNotsView().down('list');

          //clear data if exists
          notifList.getStore().setData(result.notifications);

          var notifView = me.getNotsView();
          me.changeView(notifView);
        }else{
          Ext.toast('Sorry! Unable to fetch information at the moment');
        }
      },
      failure : function(){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        Ext.toast('Sorry! Unable to connect to server');
      }
    })
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

    //get reference_id for the session;
    var reference_id = this.getApplication().getController('RefId').passRefId();

    //make an ajax request with ref id
    Ext.Ajax.disableCaching = false;
    Ext.Ajax.request({
      url: 'http://squer.mirealux.com/wdm-pm-api/user-info',////'UserProfileUpdate.json',
      timeout : 10000,
      method: 'post',
      params: {
        reference_id : reference_id,
        timestamp : new Date().getTime()
      },

      success: function(response){

        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);//.profile;
        console.log(result);

        if(result.success === true){
          result = result.data;
          console.log(result);

          //call function to update tamplate of ProfileView
          var ProfileView = me.setProfileTemplate(result);

          //change view
          me.changeView(ProfileView);
        }else{
          //
          task.cancel();
          Ext.Viewport.unmask();
          // show failure msg
          Ext.toast('Sorry! Unable to fetch information at the moment');
          console.log("loading profile failed");
        }

      },failure: function () {
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();
        Ext.toast('Sorry! Unable to fetch information at the moment');

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
    Ext.Viewport.hideMenu('left');

    var me = this;
    var task = me.loadMask(me);

    //get reference_id for the session;
    var reference_id = me.getApplication().getController('RefId').passRefId();

    Ext.Ajax.request({
      url: 'resources/data/CommonChartData.json',
      method: 'post',
      timeout : 15000,
      params: {
        reference_id : reference_id,
        timestamp : new Date().getTime()
      },
      success : function(response){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);

        if(result.success == true){
          Ext.create('WireFrameTwo.view.reports.ReportsHome');

          var ChartView = me.getReportView();
          var myCharts = [];
          myCharts.push(
            ChartView.down('random_report_chart'),
            ChartView.down('ppg_report_chart'),
            ChartView.down('fasting_report_chart'),
            ChartView.down('weight_report_chart'),
            ChartView.down('hba_report_chart')
          );

          for(var i in myCharts){
            myCharts[i].getStore().setData(result.chartdata);
          }

          var bpChart = ChartView.down('bp_report_chart');
          bpChart.getStore().setData(result.bpdata);

          var ReportView = me.getReportView();
          me.changeView(ReportView);
        }else{
          Ext.toast('Sorry! Unable to fetch information at the moment');
        }
      },
      failure : function(){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        Ext.toast('Sorry! Unable to connect to server');
      }
    })
    /*
    var me = this;
    //load mask
    var task = me.loadMask(me);

    Ext.create('WireFrameTwo.view.reports.ReportsHome');
    var ReportView = this.getReportView();

    //hide mask
    task.cancel();

    this.changeView(ReportView);
    */
  },

  onReminderTap : function(){
    Ext.create('WireFrameTwo.view.Alarms.AlarmsHome');
    var AlarmView = this.getAlarmView();
    this.changeView(AlarmView);
  },

  onPlannerTap : function(){
    console.log("planner tapped");
    if(! this.getDietPlanner()){
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.dietPlanner.DietPlanner'));
    }
    var dietPlannerView = this.getDietPlanner();
    this.changeView(dietPlannerView);
  },

  onFaqTap : function(e){
    if(! this.getFaqs()){
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.faq.Faqs'));
    }
    var faqView = this.getFaqs();
    Ext.Viewport.animateActiveItem(faqView,{
      type : 'slide',
      direction : 'left'
    });
  },

  onGalleryTap : function(){
    var me = this;
    console.log("gallery tapped");
    //recreate view every time
    if(me.getMediaGallery()){
      console.log("view exists");
      //get store view & reload
      me.getMediaGallery().down('list').getStore().load();
    }else{
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.gallery.MediaGallery'));
    }
    var MediaGallery = this.getMediaGallery();
    Ext.Viewport.animateActiveItem(MediaGallery,{
      type : 'slide',
      direction : 'left'
    });
  },

  setProfileTemplate : function(result){
    console.log(result);
    var me = this;
    var pic= "";
    if(result.profile_url){
      pic = result.profile_url;
    }else{
      pic = "./resources/data/user.jpeg";
    }

    var ageString = "";
    if(result.age && result.age.year){
      ageString = result.age.year + " years";
    }else{
      ageString = "";
    }

    //get values from return object
    var myHtmlString = '<div class="name"><img src="'+pic+'" alt="Image not found" class="pic"/><br>'+ result.fname + ' ' + result.lname + ' (' +
    result.gender + ')<br>' + ageString + '</div><table class="pinfo">' + '<tr><th height="30px"> <b>Diabetes Type:</b></th><td height="30px">' + result.diabetes_type +
    '</td></tr><tr><th height="30px"> <b>Allergy:</b></th><td height="30px">' + result.allergy + '</td></tr><tr><th height="30px"> <b>Medical History:</b></th><td height="30px">' + result.medical_history
    +'</td></tr><tr><th height="30px"> <b>Address:</b></th><td height="30px">' + result.address + '</td></tr><tr><th height="30px"> <b>Mobile No:</b></th><td height="30px">'+ result.contact_no +
    '</td></tr><tr><th height="30px"> <b>Emergency Contact:</b></th><td height="30px">' + result.contact_emergency +'</td></tr></table>';

    //create view
    Ext.create('WireFrameTwo.view.myProfile.MyProfile');

    //set values
    var ProfileView = me.getMyProfile();//myProfile
    ProfileView.down('panel[itemId="hiddenData"]').setHtml(result);
    ProfileView.down('panel').setHtml(myHtmlString);
    return ProfileView;
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


/*

var diab_type = result.diabetes_type || "";
var allergy = result.allergy || "";
var med_history = result.medical_history || "";
var address = result.address || "";
var mobile_no = result.contact_no || "";
var emer_cont = result.contact_emergency || "";

//get values from return object
var pic= "";
if(result.profile_url){
pic = result.profile_url;
}
else{
pic = "./resources/data/user.jpeg";
}
var ageString = "";
if(result.age && result.age.year){
ageString = result.age.year + " years";
}else{
ageString = "";
}
//get values from return object
var myHtmlString = '<div class="name"><img src="'+pic+'" alt="Image not found" class="pic"/><br>'+ result.fname + ' ' + result.lname + ' (' +
result.gender + ')<br>' + ageString + '</div><table class="pinfo">' + '<tr><th height="30px"> <b>Diabetes Type:</b></th><td height="30px">' + result.diabetes_type +
'</td></tr><tr><th height="30px"> <b>Allergy:</b></th><td height="30px">' + result.allergy + '</td></tr><tr><th height="30px"> <b>Medical History:</b></th><td height="30px">' + result.medical_history
+'</td></tr><tr><th height="30px"> <b>Address:</b></th><td height="30px">' + result.address + '</td></tr><tr><th height="30px"> <b>Mobile No:</b></th><td height="30px">'+ result.contact_no +
'</td></tr><tr><th height="30px"> <b>Emergency Contact:</b></th><td height="30px">' + result.contact_emergency +'</td></tr></table>';


//create view
Ext.create('WireFrameTwo.view.myProfile.MyProfile');

//set values
var ProfileView = me.getMyProfile();
ProfileView.down('panel[itemId="hiddenData"]').setHtml(result);
ProfileView.down('panel').setHtml(myHtmlString);

ProfileView.down('fieldset textfield[name="diab_type"]').setValue(diab_type);
ProfileView.down('fieldset textareafield[name="allergy"]').setValue(allergy);
ProfileView.down('fieldset textareafield[name="med_history"]').setValue(med_history);
ProfileView.down('fieldset textareafield[name="address"]').setValue(address);
ProfileView.down('fieldset textfield[name="mobile_no"]').setValue(mobile_no);
ProfileView.down('fieldset textfield[name="emer_cont"]').setValue(emer_cont);


*/
