Ext.define('WireFrameTwo.view.reports.ReportsHome',{
    extend : 'Ext.Panel',
    requires : ['WireFrameTwo.view.reports.PatientReport',
    'WireFrameTwo.view.ToolBar','WireFrameTwo.view.reports.HBAcharts',
  'WireFrameTwo.view.reports.WeightCharts','WireFrameTwo.view.reports.BloodPressureCharts',
  'WireFrameTwo.view.reports.FastingCharts','WireFrameTwo.view.reports.PPGCharts',
  'WireFrameTwo.view.reports.RandomCharts'],
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
                store : 'HBAstore'
            }
            ,{
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
            ,{
                xtype : 'ppg_report_chart',
                title : 'Reports',
                store : 'PPGstore'//mandatory
            }
            ,{
                xtype : 'random_report_chart',
                title : 'Reports',
                store : 'RandomStore'//mandatory
            }
        ]
    },
    initialize : function(){
        var toolbar = this.down('toolbarmenu');
        toolbar.add({
            xtype : 'spacer'
        });
        toolbar.add({
            xtype : 'button',
            iconCls : 'add',
            action : 'add_report'
        });
    }
});
