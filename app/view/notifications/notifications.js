Ext.define('WireFrameTwo.view.notifications.notifications',{
  extend: 'Ext.Panel',
  xtype: 'notifications',
  requires: ['WireFrameTwo.view.ToolBar','Ext.List',
  'WireFrameTwo.store.NotificationStore'],
  stores : ['SessionStore'],
  config: {
      items: [
          {
              xtype : 'toolbarmenu',
              title : 'Notifications'
          },{
              xtype : 'list',
              itemId : 'notifs',
              itemTpl : '<div class="talk-bubble tri-right left-in">'+
              '<div class="talktext">'+
              '<p>{message}</p>{date}<div>' +
              '</div></div>',
              height : '100%',
              store : 'notificationStore',
              styleHtmlContent : true,
              itemCls : 'notifications',
              disableSelection : true
          }
      ]
  }
})
