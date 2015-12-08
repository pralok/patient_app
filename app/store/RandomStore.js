Ext.define('WireFrameTwo.store.RandomStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel'],
    alias : 'store.RandomStore',
    config : {
        storeId : 'RandomStore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "random"},
        autoLoad : true
    }
})
