Ext.define('WireFrameTwo.view.Alarms.AddAlarmPage',{
	extend : 'Ext.form.Panel',
    requires : ['WireFrameTwo.view.Alarms.TimePickerField','Ext.field.Toggle','Ext.field.Checkbox',
    'Ext.form.FieldSet','Ext.Toolbar','Ext.Button'],
    xtype : 'addalarm',
    config : {
        items : [
        	{
				xtype : 'toolbar',
				items : [
				{
					xtype : 'button',
					text : 'cancel',
					ui : 'decline',
					action : 'cancel'
				},{
					xtype : 'spacer'
				},{
					xtype : 'button',
					text : 'save',
					ui : 'confirm',
					action : 'save' 
				}]
			},
            {
                xtype : 'timepickerfield',
                label : 'Select Time',
                name : 'time'
            },{
                xtype : 'togglefield',
                label : 'Daily',
                name : 'Daily'
            },{
                xtype : 'fieldset',
                itemId : 'checkboxes',
                items : [
                    {
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        name : 'Sun',
                        label : 'S',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    },{
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        name : 'Mon',
                        label : 'M',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    },{
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        name : 'Tue',
                        label : 'T',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    },{
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        name : 'Wed',
                        label : 'W',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    },{
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        name : 'Thu',
                        label : 'T',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    },{
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        label : 'F',
                        name : 'Fri',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    },{
                        xtype : 'checkboxfield',
                        cls : 'check_day',
                        name : 'Sat',
                        label : 'S',
                        value : 'Yes',
                        labelAlign : 'top',
                        labelCls : 'check-label'
                    }
                ]
            }
        ]

    }
})