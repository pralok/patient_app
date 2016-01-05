Ext.define('WireFrameTwo.view.gallery.MediaGallery', {
    extend: 'Ext.Panel',
    xtype: 'mediaGallery',
    requires: ['WireFrameTwo.view.ToolBar','Ext.dataview.List',
    'WireFrameTwo.store.MediaGalleryStore'],
    config: {
      layout: 'fit',
        items: [
            {
              xtype : 'toolbarmenu',
              title : 'Gallery'
            },{
              xtype : 'list',
              height : '100%',
              itemTpl: '<h5>{title}</h5>' +
              '<iframe width="100%" height="315"' +
              'src="{link}?autoplay=0"></iframe>',
              styleHtmlContent : true,
              store : 'mediaGalleryStore',
              disableSelection : true
            }
        ]
    }
});
