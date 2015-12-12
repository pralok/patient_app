Ext.define('WireFrameTwo.view.home.HomePage', {
  extend: 'Ext.Panel',
  xtype: 'homePage',
  requires: ['Ext.Button'],
  config: {
    fullscreen: true,
    layout: 'vbox',
    items: [
      {
        xtype : 'toolbar',
//        styleHtmlContent : true,
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
      },{
        xtype : 'panel',
        flex : 1,
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'My Profile',
            styleHtmlContent : true,
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
            html : 'Notifications',
            styleHtmlContent : true,
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
        flex : 1,
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'Record Entry',
            styleHtmlContent : true,
            style: 'background-color: #c2f2d0;',
            flex : 1,
            listeners : [
              {
                element: 'element',
                event: 'tap',
                fn: function() {
                  this.fireEvent('onRecordClick', this);
                }
              }
            ]
          },
          {
            xtype : 'panel',
            html : 'My Reports',
            styleHtmlContent : true,
            style: 'background-color: #b0e0e6;',
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
        flex : 1,
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'Diet Planner',
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
            html : 'Media Gallery',
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
        flex : 1,
        layout : 'hbox',
        items : [
          {
            xtype : 'panel',
            html : 'Dosage Reminder',
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
            html : 'FAQs',
            styleHtmlContent : true,
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
  },
  initialize : function(){
    console.log('news list view created');
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
