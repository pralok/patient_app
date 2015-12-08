Ext.define('WireFrameTwo.view.news.FeedsPage', {
    extend: 'Ext.Panel',
    requires : ['Ext.Button','WireFrameTwo.view.ToolBar'],
    xtype: 'feedsHome',
    config: {
      layout: 'vbox',
      fullscreen: true,
      items: [
        {
            xtype : 'toolbarmenu',
            title : 'Knowledge Resource'
        },
      {
          xtype : 'panel',
          layout: 'vbox',
          html: 'Media Gallery',
//          styleHtmlCls : true,
          styleHtmlContent : true,
          style: 'background-color: #BDB6D5;',
          flex: 3,
          listeners : [
            {
              element: 'element',
              event: 'tap',
              fn: function() {
                this.fireEvent('onGalleryClick', this);
              }
            }
          ]
      },
      {
          xtype : 'panel',
          layout : 'hbox',
          flex : 4,
          items : [
            {
              xtype : 'panel',
              styleHtmlContent : true,
              html: 'FAQs',
                style: 'background-color: #DC4E80;',
                flex: 1,
                listeners : [
                  {
                    element: 'element',
                    event: 'tap',
                    fn: function() {
                      this.fireEvent('onFaqClick', this);
                    }
                  }
                ]
            },
            {
              xtype : 'panel',
              styleHtmlContent : true,
              html: 'Diet Planner',
                style: 'background-color: #0B96F3;',
                flex: 1,
                listeners : [
                  {
                    element: 'element',
                    event: 'tap',
                    fn: function() {
                      this.fireEvent('onPlannerClick', this);
                    }
                  }
                ]
            }
          ]
        }
      ]
    },
    initialize : function(){
      console.log('feeds view created');
    }
});
