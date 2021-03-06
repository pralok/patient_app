Ext.define('WireFrameTwo.view.reports.NewReportForm',{
    extend : 'Ext.form.Panel',
    requires: ['Ext.field.Number','Ext.field.Select',
    'Ext.field.Text','Ext.Toolbar','WireFrameTwo.view.Alarms.TimePickerField'],
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
                          {text: 'Blood Pressure ',  value: 'blood_pressure'},
                            {text: 'Blood Glucose ', value: 'blood_glucose '},
                            {text: 'weight', value: 'weight'},
                            {text: 'HBA1C',  value: 'hba1c'}
                        ]
                    }
                ]
            },{
              xtype : 'panel',
              cls : 'blood_pressure',
              items : [
                {
                  html : 'Blood Pressure',
                  styleHtmlContent : true,
                },
                {
                  xtype : 'textfield',
                  name : 'sbp',
                  label : 'Systolic (SBP)',
                  labelWrap : true,
                  value : 120
                },
                {
                  xtype : 'textfield',
                  name : 'dbp',
                  label : 'Dystolic (DBP)',
                  labelWrap : true,
                  value : 80
                }
              ]
            },{
              xtype : 'panel',
              cls : 'blood_glucose ',
              hidden : true,
              items : [
              {
                html : 'Blood Glucose',
                styleHtmlContent : true,
              },
                {
                  xtype: 'radiofield',
                  name : 'bld_glc_type',
                  cls : 'bld_glc_type',
                  value: 'fasting',
                  label: 'Fasting(FPG)',
                  labelWrap : true
                },{
                  xtype: 'radiofield',
                  name : 'bld_glc_type',
                  cls : 'bld_glc_type',
                  value: 'ppg',
                  label: 'Post Prandial (PPG)',
                  labelWrap : true
                },
                {
                  xtype: 'radiofield',
                  name : 'bld_glc_type',
                  cls : 'bld_glc_type',
                  value: 'random ',
                  label: 'Random',
                  labelWrap : true
                },{
                  xtype : 'panel',
                  cls : 'ppg_type',
                  hidden : true,
                  items : [
                    {
                      html : 'Post Prandial type',
                      styleHtmlContent : true
                    },
                    {
                      xtype: 'radiofield',
                      name : 'ppg_type',
                      value: 'breakfast ',
                      label: 'Post Breakfast',
                      labelWrap : true
                    },{
                      xtype: 'radiofield',
                      name : 'ppg_type',
                      value: 'lunch ',
                      label: 'Post Lunch',
                      labelWrap : true
                    },{
                      xtype: 'radiofield',
                      name : 'ppg_type',
                      value: 'dinner',
                      label: 'Post Dinner',
                      labelWrap : true
                    }
                  ]

                },{
                  xtype : 'numberfield',
                  label : 'Reading',
                  name : 'reading'
                }
              ]
            },{
              xtype : 'panel',
              cls : 'weight',
              hidden : true,
              items : [
              {
                html : 'Enter your weight',
                styleHtmlContent : true,
              },
              {
                xtype : 'numberfield',
                name  : 'weight',
                label : 'weight'
              }]
            },{
              xtype : 'panel',
              cls : 'hba1c',
              hidden : true,
              items : [
              {
                html : 'HBA1C',
                styleHtmlContent : true,
              },
              {
                xtype : 'numberfield',
                name  : 'hba1c',
                label : 'HBA1C'
              }]
            },{
              xtype : 'panel',
              cls : 'common',
              items : [
                {
                  html : 'Select Date and Time',
                  styleHtmlContent : true
                },
                {
                  xtype : 'datepickerfield',
                  label : 'Date',
                  value : new Date(),
                  name : 'report_date'
                },{
                  xtype : 'timepickerfield',
                  label : 'Select Time',
                  name : 'report_time',
                  labelWrap : true
                }
              ]
            }
        ]

    }
})
