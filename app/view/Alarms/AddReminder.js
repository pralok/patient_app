Ext.define('WireFrameTwo.view.Alarms.AddReminder',{
  extend : 'Ext.form.Panel',
  requires : ['WireFrameTwo.view.Alarms.TimePickerField',
  'Ext.field.Toggle','Ext.field.Checkbox','Ext.field.Radio',
  'Ext.form.FieldSet','Ext.Toolbar','Ext.Button'],
  xtype : 'addreminder',
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
        },{
          html : '<h5>Select Reminder Type</h5>',
          styleHtmlContent : true
        },{
          xtype: 'radiofield',
          name : 'type',
          value: 'dosage',
          label: 'Dosage'
          //            ,checked: true
        },
        {
          xtype: 'radiofield',
          name : 'type',
          value: 'refill',
          label: 'Refill'
        },{
          xtype : 'panel',
          cls : 'dosage',
          hidden : true,
          items : [
            {
              html : 'Set Dosage Reminder',
              styleHtmlContent : true
            },
            {
              xtype : 'textfield',
              label : 'Reminder For',
              name : 'reminder_title',
              labelWrap :true
            },
            {
                xtype : 'timepickerfield',
                label : 'Select Time',
                name : 'time',
                labelWrap : true
            },{
                xtype : 'togglefield',
                label : 'Daily',
                name : 'Daily',
                labelWrap : true
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
        },{
          xtype : 'panel',
          cls : 'refill',
          hidden : true,
          items : [
            {
              html : 'Set Refill Reminder',
              styleHtmlContent : true
            },
            {
              xtype : 'textfield',
              label : 'Title',
              name : 'refill_title',
              labelWrap : true
            },{
              xtype : 'numberfield',
              label : 'Reminder Me in (days)',
              name : 'refill_days_left',
              labelWrap : true
            }
          ]

        }
      ]

    }
  })
