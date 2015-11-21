Ext.define('WireFrameTwo.view.reports.ReportsHome',{
    extend : 'Ext.Panel',
    requires : ['WireFrameTwo.view.reports.PatientReport',
    'WireFrameTwo.view.ToolBar','WireFrameTwo.view.reports.HBAcharts',
  'WireFrameTwo.view.reports.WeightCharts','WireFrameTwo.view.reports.BloodPressureCharts'],
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
            }                    ,{
                xtype : 'report_chart',
                title : 'Reports',
                store : 'RBSstore'//mandatory
            }
            ,{
                xtype : 'report_chart',
                title : 'Reports',
                store : 'SBPstore'//mandatory
            }
            ,{
                xtype : 'report_chart',
                title : 'Reports',
                store : 'DBPstore'//mandatory
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
