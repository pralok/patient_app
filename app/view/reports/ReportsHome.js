Ext.define('WireFrameTwo.view.reports.ReportsHome',{
    extend : 'Ext.Panel',
    requires : ['WireFrameTwo.view.reports.PatientReport','WireFrameTwo.view.ToolBar'],
    xtype : 'myReports',
    config : {
        fullscreen : true,
        scrollable : true,
        items : [
            {
              xtype : 'toolbarmenu'
            },
            {
                xtype : 'report_chart',
                title : 'Reports',
                store : 'HBAstore'
            }
            ,{
                xtype : 'report_chart',
                title : 'Reports',
                store : 'FBGstore'//,//mandatory
            }                    ,{
                xtype : 'report_chart',
                title : 'Reports',
                store : 'PPGstore'
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