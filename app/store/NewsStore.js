Ext.define('WireFrameTwo.store.NewsStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.NewsModel'],
    alias : 'store.newsStore',
    config : {
        storeId : 'newsStore',
        model : 'WireFrameTwo.model.NewsModel',
        autoLoad : true
    }
})