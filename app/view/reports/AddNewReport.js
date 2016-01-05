Ext.define('WireFrameTwo.view.reports.AddNewReport',{
    extend : 'Ext.form.Panel',
    requires: ['Ext.field.Number','Ext.field.Select',
    'Ext.field.Text','WireFrameTwo.view.ToolBar',
    'WireFrameTwo.view.Alarms.TimePickerField'],
    xtype : 'addReport',
    config : {
        items : [
            {
                xtype : 'toolbarmenu',
                title : 'Enter Reports'
            },{
                xtype : 'fieldset',
                title : '<b>Add New Readings</b>',
                items : [
                    {
                        xtype : 'selectfield',
                        label : 'Report Type',
                        name : 'report_type',
                        labelWrap : true,
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
                  html : '<b>Blood Pressure</b>',
                  styleHtmlContent : true,
                },
                {
                  xtype : 'textfield',
                  name : 'sbp',
                  label : 'Systolic (SBP)',
                  labelWrap : true,
                  value : 120
                },{
                  html : '<br />'
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
                html : '<b>Select Blood Glucose Type</b>',
                styleHtmlContent : true,
              },
                {
                  xtype: 'radiofield',
                  name : 'bld_glc_type',
                  cls : 'bld_glc_type',
                  value: 'fasting',
                  label: 'Fasting(FPG)',
                  labelWrap : true
                },
/*                {
                  html : '<br/>'
                },
*/                {
                  xtype: 'radiofield',
                  name : 'bld_glc_type',
                  cls : 'bld_glc_type',
                  value: 'ppg',
                  label: 'Post Prandial (PPG)',
                  labelWrap : true
                },
/*                {
                  html : '<br/>'
                },
*/                {
                  xtype: 'radiofield',
                  name : 'bld_glc_type',
                  cls : 'bld_glc_type',
                  value: 'random ',
                  label: 'Random',
                  labelWrap : true
                },
/*                {
                  html : '<br/>'
                },
*/                {
                  xtype : 'panel',
                  cls : 'ppg_type',
                  hidden : true,
                  items : [
                    {
                      html : '<b>Select Post Prandial type</b>',
                      styleHtmlContent : true
                    },
                    {
                      xtype: 'radiofield',
                      name : 'ppg_type',
                      value: 'breakfast ',
                      label: 'Post Breakfast',
                      labelWrap : true
                    },
/*                    {
                      html : '<br/>'
                    },
*/                    {
                      xtype: 'radiofield',
                      name : 'ppg_type',
                      value: 'lunch ',
                      label: 'Post Lunch',
                      labelWrap : true
                    },
/*                    {
                      html : '<br/>'
                    },
*/                  {
                      xtype: 'radiofield',
                      name : 'ppg_type',
                      value: 'dinner',
                      label: 'Post Dinner',
                      labelWrap : true
                    }
                  ]
                },
                {
                  html : '<br/>'
                },
                {
                  xtype : 'numberfield',
                  label : 'Reading',
                  name : 'reading',
                  hidden : true,
                  itemId : 'ReadingField'
                }
              ]
            },{
              xtype : 'panel',
              cls : 'weight',
              hidden : true,
              items : [
              {
                html : '<b>Enter your weight</b>',
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
                  html : '<b>Select Date and Time</b>',
                  styleHtmlContent : true
                },
                {
                  xtype : 'datepickerfield',
                  label : 'Date',
                  value : new Date(),
                  name : 'report_date'
                },
                {
                  html : '<br/>'
                },
                {
                  xtype : 'timepickerfield',
                  label : 'Select Time',
                  name : 'report_time',
                  labelWrap : true
                }
              ]
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
            text : 'submit',
            ui : 'confirm',
            //iconCls : 'add',
            action : 'add_report'
        });

        var currDate = new Date();
        var currAmPm = "AM";
        var currHour = parseInt(currDate.getHours(),10);
        if(currHour > 12){
            currAmPm = "PM";
            currHour = currHour - 12;
        }else if(currHour == 12){
          currAmPm = "PM";
        };
        var currMin = Math.floor(currDate.getMinutes()/5)*5;
        if(currMin < 10){
          currMin = "0" + currMin ;
        }
        var resultString = currHour + ":" + currMin  + " " + currAmPm;
        this.down('timepickerfield').setValue(resultString);
    }
})
