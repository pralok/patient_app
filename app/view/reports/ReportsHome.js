Ext.define('WireFrameTwo.view.reports.ReportsHome',{
  extend : 'Ext.Panel',
  requires : ['WireFrameTwo.view.reports.PatientReport',
  'WireFrameTwo.view.ToolBar','WireFrameTwo.view.reports.HBAcharts',
  'WireFrameTwo.view.reports.WeightCharts','WireFrameTwo.view.reports.BloodPressureCharts',
  'WireFrameTwo.view.reports.FastingCharts','WireFrameTwo.view.reports.PPGCharts',
  'WireFrameTwo.view.reports.RandomCharts','Ext.field.DatePicker'],
  stores : ['SessionStore'],
  xtype : 'myReports',
  config : {
    fullscreen : true,
    styleHtmlContent : true,
    scrollable : true,
    items : [
      {
        xtype : 'toolbarmenu'
      },

      {
        xtype : 'hba_report_chart',
        title : 'Reports',
        itemId : 'hba_chart',
        store : 'HBAstore'
      },
      {
        xtype : 'weight_report_chart',
        title : 'Reports',
        store : 'WeightStore'//,//mandatory
      }
      ,{
        xtype : 'bp_report_chart',
        title : 'Reports',
        store : 'BPStore'
      }
      ,{
        xtype : 'fasting_report_chart',
        title : 'Reports',
        store : 'FastingStore'//mandatory
      }
      ,
      {
        xtype : 'ppg_report_chart',
        title : 'Reports',
        store : 'PPGstore'//mandatory
      },
      {
        xtype : 'random_report_chart',
        title : 'Reports',
        store : 'RandomStore'//,//mandatory
      }
    ]
  },
  initialize : function(){
    /*
    var me = this;
    //get sesssion ID
    var myStore = Ext.getStore('SessionStore');
    var refID = myStore.getAt(0).getData().refID;

    //get stores and set params
    var CommonChartStore = Ext.getStore('CommonChartStore');

    var hbaStore = CommonChartStore.setFilters({
      property : "type",
      value : "hba1c"
    });

    hbaStore.setParams({
      reference_id : refID,
      type : "hba1c"
    });

    //get chart component and set store
    var hbaComponent = Ext.ComponentQuery.query('#hba_chart')[0];
    hbaComponent.setStore(hbaStore);

    //load store
    hbaStore.load();

    */
  }
});
