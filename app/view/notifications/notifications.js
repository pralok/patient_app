Ext.define('WireFrameTwo.view.notifications.notifications',{
  extend: 'Ext.Panel',
  xtype: 'notifications',
  requires: ['WireFrameTwo.view.ToolBar','Ext.List', 'WireFrameTwo.store.NewsStore'],
  config: {
      items: [
          {
              xtype : 'toolbarmenu',
              title : 'Home'
          },{
              xtype : 'list',
              itemTpl : '<img src="resources/startup/320x460.jpg"><p>{title}</p>',
              height : '100%',
              store : {
                  type : 'newsStore'
              },
              styleHtmlContent : true,
              cls : 'newsFeed',
              scroll: 'vertical'
          }
      ]
  },
  initialize : function(){
      console.log('news list view created');
  }
})
