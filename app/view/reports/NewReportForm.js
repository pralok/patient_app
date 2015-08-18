Ext.define('WireFrameTwo.view.reports.NewReportForm',{
    extend : 'Ext.form.Panel',
    requires: ['Ext.field.Number','Ext.field.Select','Ext.field.Text','Ext.Toolbar'],
    xtype : 'newReport',
    config : {
        items : [
            {
                xtype : 'toolbar',
                items : [
                    {
                        xtype : 'button',
                        text : 'Close',
                        ui : 'decline',
                        action : 'close'
                    },{
                        xtype : 'spacer'
                    },{
                        xtype : 'button',
                        text : 'Submit',
                        ui : 'confirm',
                        action : 'submit'
                    }
                ]
            },{
                xtype : 'fieldset',
                title : 'Add New Readings',
                items : [
                    {
                        xtype : 'selectfield',
                        label : 'Report Type',
                        name : 'report_type',
                        options : [
                            {text: 'HBA1C',  value: 'HBA1C'},
                            {text: 'FBG', value: 'FBG'},
                            {text: 'DBP',  value: 'DBP'},
                            {text: 'PPG',  value: 'PPG'},
                            {text: 'RBS', value: 'RBS'},
                            {text: 'SBP',  value: 'SBP'}
                        ]
                    },{
                        xtype : 'numberfield',
                        label : 'Reading',
                        name : 'report_value'
                    }
                ]
            }
        ]

    }
})