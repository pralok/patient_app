Ext.define('WireFrameTwo.controller.Report',{
  extend : 'Ext.app.Controller',
  requires: ['Ext.Toast'],
  config : {
    views : ['WireFrameTwo.view.reports.ReportsHome',
    'WireFrameTwo.view.reports.AddNewReport'],
    refs : {
      //unused
      //views
      reportView : 'myReports',
      reportForm : 'addReport',

      //select fields
      report_type_selection : 'addReport fieldset selectfield',
      bld_glc_selection : 'addReport panel radiofield[cls="bld_glc_type"]',

      //buttons
      submitReport : 'addReport toolbarmenu button[action="add_report"]'
    },
    control : {
      report_type_selection : {
        change : 'onReportTypeSelect'
      },
      bld_glc_selection : {
        check : 'onBldGlcTypeSelect'
      },
      addReport : {
        tap : 'onAddReport'
      },
      submitReport : {
        tap : 'onReportSubmit'
      },
      closeReport : {
        tap : 'onReportClose'
      }
    }
  },
  onReportTypeSelect : function(btn, newValue, oldValue, eOpts ){
    //hide this
    console.log("I unselected " + oldValue);
    var hideElement = Ext.ComponentQuery.query('addReport panel[cls='+ oldValue +']')[0];
    hideElement.hide();
    //show this
    console.log("I selected " + newValue);
    var showElement = Ext.ComponentQuery.query('addReport panel[cls='+ newValue +']')[0];
    showElement.show();
  },
  onBldGlcTypeSelect : function(btn, e , eOpts ){
    //show reading field
    var readingField = Ext.ComponentQuery.query('#ReadingField')[0];
    if(readingField.isHidden){
      readingField.setHidden(false);
    }

    var ppg_types = Ext.ComponentQuery.query('panel panel[cls=ppg_type]')[0];
    if(btn.getValue() == "ppg"){
      ppg_types.show();
    }else{
      ppg_types.hide();
    }
  },
  /*
  onAddReport : function(){
  //create form view
  Ext.create('WireFrameTwo.view.reports.NewReportForm');
  var myReportForm = this.getReportForm();
  Ext.Viewport.animateActiveItem(myReportForm,{
  type : 'slide',
  direction : 'up'
});
},
*/
onReportSubmit : function(){
  var me = this;
  //fetch form values
  var report_form = me.getReportForm().getValues();
  var report_data = {};
  if(report_form.report_type == "blood_pressure"){
    report_data.sbp = report_form.sbp;
    report_data.dbp = report_form.dbp;
  }else if(report_form.report_type == "hba1c"){
    report_data.hba1c = report_form.hba1c;
  }else if(report_form.report_type == "blood_glucose "){
    report_data.bld_glc_type = report_form.bld_glc_type;
    report_data.reading = report_form.reading;
    if(report_form.bld_glc_type == "ppg"){
      report_data.ppg_type = report_form.ppg_type;
    }
  }else if(report_form.report_type == "weight"){
    report_data.weight = report_form.weight;
  }

  //submit a request to server with refId
  var RefId = me.getApplication().getController('RefId').passRefId();

  //load mask
  var task = me.loadMask("Entering record..");

  Ext.Ajax.request({
    url: 'http://squer.mirealux.com/wdm-pm-api/add-report',
    method: 'post',
    type : 'json',
    params: {
      reference_id : RefId,
      timestamp : new Date().getTime(),
      report_type : report_form.report_type,
      report_date : report_form.report_date,
      report_time : report_form.report_time,
      report_data : Ext.util.JSON.encode(report_data)
    },

    success: function (response) {
      //stop loadMask
      task.cancel();
      Ext.Viewport.unmask();

      var result = Ext.JSON.decode(response.responseText);
      if (result.success === true) {
        //show success msg
        Ext.toast('Record entered successfully');

        /*
        //get and all reload the stores
        me.reloadStore('HBAstore');
        me.reloadStore('DBPstore');
        me.reloadStore('FBGstore');
        me.reloadStore('PPGstore');
        me.reloadStore('RBSstore');
        me.reloadStore('SBPstore');

        //get view(no need to recreate)
        var ChartView = me.getReportView();
        */

      } else {
        // show failure msg
        console.log("show failure msg");
        Ext.toast('Unable to submit entry !!');
      }
    },
    failure: function () {
      //stop loadMask
      task.cancel();
      Ext.Viewport.unmask();
      // show connection error
      console.log("network error");
      Ext.toast('Unable to submit entry !!');
    }
  })
},
onReportClose : function(){
  var myReports = this.getReportView();

  Ext.Viewport.animateActiveItem(myReports,{
    type : 'slide',
    direction : 'down'
  });
},
reloadStore : function(storeId){
  var myStore = Ext.getStore(storeId);
  myStore.load();
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
