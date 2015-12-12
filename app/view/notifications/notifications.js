Ext.define('WireFrameTwo.view.notifications.notifications',{
  extend: 'Ext.Panel',
  xtype: 'notifications',
  requires: ['WireFrameTwo.view.ToolBar','Ext.List',
  'WireFrameTwo.store.NotificationStore'],
  config: {
      items: [
          {
              xtype : 'toolbarmenu',
              title : 'Notifications'
          },{
              xtype : 'list',
              itemTpl : '<div class="talk-bubble tri-right left-in">'+
              '<div class="talktext">'+
              '<p>{message}</p>{date}<div>' +
              '</div></div>',
              height : '100%',
              store : {
                  type : 'notificationStore'
              },
              styleHtmlContent : true,
              itemCls : 'notifications',
              //scroll: 'vertical',
              disableSelection : true
          }
      ]
  },
  initialize : function(){
      console.log('news list view created');
  }
})
