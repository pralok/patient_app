Ext.define('WireFrameTwo.view.news.DietPlanner', {
    extend: 'Ext.Panel',
    xtype: 'dietPlanner',
    requires: ['WireFrameTwo.view.ToolBar','Ext.Button'],
    config: {
      layout: 'fit',
        items: [
            {
              xtype : 'toolbarmenu',
              title : 'Diet Planner'
            },{
              scrollable : true,
              html : 'content for diet planner page awaited..',
              styleHtmlContent : true
            }
        ]
    },
    initialize : function(){
        console.log('news list view created');
    }
});
