Ext.define('WireFrameTwo.view.dietPlanner.DietPlanner', {
  extend: 'Ext.Panel',
  xtype: 'dietPlanner',
  requires: ['WireFrameTwo.view.ToolBar','Ext.Button',
  'Ext.field.Select'],
  config: {
    layout: 'fit',
    items: [
      {
        xtype : 'toolbarmenu',
        title : 'Diet Planner'
      },{
        xtype : 'fieldset',
        title : 'Choose your Diet Options',
        items : [
          {
            xtype : 'selectfield',
            labelWrap : true,
            styleHtmlContent : true,
            label : 'Food Type',
            name : 'food_type',
            options : [
              {text: 'North Indian ',  value: 'north_indian'},
              {text: 'South Indian', value: 'south_indian'},
              {text: 'East Indian', value: 'east_indian'},
              {text: 'West Indian',  value: 'west_indian'}
            ]
          },
          {
            xtype : 'selectfield',
            styleHtmlContent : true,
            labelWrap : true,
            label : 'Calories Intake',
            name : 'calories',
            options : [
              {text: '1400',  value: 1400},
              {text: '1600', value: 1600},
              {text: '1800', value: 1800},
              {text: '2000',  value: 2000}
            ]
          },{
            html : '<br />'
          },{
            xtype : 'button',
            text : 'submit',
            ui : 'action-round',
            handler : function(){
              console.log("clicked");
              var food_type = Ext.ComponentQuery.query('dietPlanner selectfield')[0];
              var calorie_count = Ext.ComponentQuery.query('dietPlanner selectfield')[1];

              var html_content = Ext.ComponentQuery.query('#content')[0];

              if(food_type.getValue() == "north_indian" && calorie_count.getValue() == 1400){

                html_content.setHtml('<div>clicked button<div>');

              }else{
                html_content.setHtml('');
                console.log(food_type.getValue());
                console.log(calorie_count.getValue());
              }
            }
          },{
            html : '<br />'
          },{
            xtype : 'panel',
            html : '',
            itemId : 'content'
          }
        ]
      }
    ]
  },
  initialize : function(){
    console.log('diet planner view created');
  }
});
