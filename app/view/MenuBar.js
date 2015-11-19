Ext.define('WireFrameTwo.view.MenuBar',{
    extend : 'Ext.Menu',
    requires: ['Ext.Button'],
    xtype : 'menu',
    config : {
        items: [
          {
              xtype : 'button',
              action : 'profile',
              text: 'My Profile',
              iconCls: 'user'
          },
          {
              xtype : 'button',
              action : 'feeds',
              text: 'Feeds',
              iconCls: 'star'
          },
          {
                xtype : 'button',
                action : 'viewReports',
                text: 'My Reports',
                iconCls: 'compose'
            },{
              xtype : 'button',
              action : 'viewNotifications',
              text: 'Notifications',
              iconCls: 'action'
            },{
                xtype : 'button',
                action : 'reminders',
                text: 'Reminders',
//                badge : '3',
                iconCls: 'time'
            },
            {
                xtype : 'button',
                action : 'logout',
                text: 'Logout',
                iconCls: 'reply'
            }
        ]

    }
})

/*
{
    xtype : 'button',
    action : 'viewMyDoctor',
    text: 'My Doctor',
    iconCls: 'user'
},
*/
