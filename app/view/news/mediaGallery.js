Ext.define('WireFrameTwo.view.news.mediaGallery', {
    extend: 'Ext.Panel',
    xtype: 'mediaGallery',
    requires: ['WireFrameTwo.view.ToolBar','Ext.Button'],
    config: {
      layout: 'fit',
        items: [
            {
                xtype : 'toolbarmenu',
                title : 'Home',
                items : [
                  {
                    xtype : 'button',
                    text : 'Main',
                    action : 'toFeeds',
                    ui : 'back'
                  }
                ]
            },{
              scrollable : true,
              html : '<h5>How to Administer Insulin</h5>' +
              '<iframe width="100%" height="315"' +
                'src="https://www.youtube.com/embed/KP6Zm9vl3FM?autoplay=0">' +
              '</iframe>'+
              '<h5>How to Prevent Diabetes</h5>' +
              '<iframe width="100%" height="315"' +
                'src="https://www.youtube.com/embed/jTAR5unp-Xw?autoplay=0">' +
              '</iframe>',
              styleHtmlContent : true
            }
        ]
    },
    initialize : function(){
        console.log('news list view created');
    }
});
