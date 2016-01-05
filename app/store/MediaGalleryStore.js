Ext.define('WireFrameTwo.store.MediaGalleryStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.MediaGalleryModel','Ext.data.proxy.Rest'],
    alias : 'store.mediaGalleryStore',
    config : {
        storeId : 'mediaGalleryStore',
        model : 'WireFrameTwo.model.MediaGalleryModel',
        autoLoad : true
    }
})
