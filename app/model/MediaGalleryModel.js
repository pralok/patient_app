Ext.define('WireFrameTwo.model.MediaGalleryModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['title', 'link'],
        proxy : {
            url : 'resources/data/MediaGallery.json',
            type : 'rest',
            method : 'POST',
            reader : {
                type : 'json',
                rootProperty : 'data'
            }
        }
    }
})
