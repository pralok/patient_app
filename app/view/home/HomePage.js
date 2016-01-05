Ext.define('WireFrameTwo.view.home.HomePage', {
  extend: 'Ext.Panel',
  xtype: 'homePage',
  requires: ['Ext.Button'],
  config: {
    fullscreen: true,
    scrollable : true,
    layout: 'vbox',
    items: [
      {
        xtype : 'toolbar',
        docked : 'top',
        //styleHtmlContent : true,
        title : 'Home',
        items : [
          {
            xtype : 'spacer'
          },{
            xtype : 'button',
            ui : 'action',
            action : 'logout',
            text :'Logout'
          }
        ]
      },
      {
        xtype : 'panel',
        //flex : 1,
        //minHeight : '100px',
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'My Profile<br><br> <img src="./resources/data/profile.png" height="50" width="50"/>',
            styleHtmlContent : true,
            cls : 'homepg',
            style: 'background-color: #ffc5d9;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onMyProfileClick', this);
                }
              }
            ]
          },
          {
            xtype : 'panel',
            html : 'Notifications<br><br> <img src="./resources/data/notification.png" height="50" width="50"/>',
            styleHtmlContent : true,
            cls : 'homepg',
            style: 'background-color: #fcebdd;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onNotifClick', this);
                }
              }
            ]
          }
        ]
      },{
        xtype : 'panel',
        //flex : 1,
        //minHeight : '100px',
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'My Records<br><br> <img src="./resources/data/record.png" height="50" width="50"/>',
            cls : 'homepg',
            styleHtmlContent : true,
            style: 'background-color: #c2f2d0;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onAddReportClick', this);
                }
              }
            ]
          },
          {
            xtype : 'panel',
            html : 'My Reports<br><br> <img src="./resources/data/report.jpg" height="50" width="50"/>',
            styleHtmlContent : true,
            style: 'background-color: #b0e0e6;',
            cls : 'homepg',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onReportClick', this);
                }
              }
            ]
          }
        ]
      },{
        xtype : 'panel',
        //flex : 1,
        //minHeight : '100px',
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'Diet Planner<br><br> <img src="./resources/data/diet.png" height="50" width="50"/>',
            cls : 'homepg',
            styleHtmlContent : true,
            style: 'background-color: #ffc5d9;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onPlannerClick', this);
                }
              }
            ]
          },
          {
            xtype : 'panel',
            html : 'Media Gallery<br><br> <img src="./resources/data/video.png" height="50" width="50"/>',
            cls : 'homepg',
            styleHtmlContent : true,
            style: 'background-color: #5E19CC;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onGalleryClick', this);
                }
              }
            ]
          }
        ]
      },{
        xtype : 'panel',
        //flex : 1,
        //minHeight : '100px',
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'Dosage Reminder<br><br> <img src="./resources/data/dose.jpg" height="50" width="50"/>',
            cls : 'homepg',
            styleHtmlContent : true,
            style: 'background-color: #decab0;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onDosageClick', this);
                }
              }
            ]
          },
          {
            xtype : 'panel',
            html : 'FAQs<br><br> <img src="./resources/data/faq.png" height="50" width="50"/>',
            styleHtmlContent : true,
            cls : 'homepg',
            style: 'background-color: #b4787e;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onFaqClick', this);
                }
              }
            ]
          }

        ]
      }
    ]
  }
});

/*
,
{
  html : 'two',
  styleHtmlContent : true,
  style: 'background-color: #d9ad24;',
  flex : 1
},
{
  html : 'two',
  styleHtmlContent : true,
  style: 'background-color: #81879d;',
  flex : 1
}

,
{
  html : 'two',
  styleHtmlContent : true,
  style: 'background-color: #97bf83;',
  flex : 1
}
*/
