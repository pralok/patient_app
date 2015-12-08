Ext.define('WireFrameTwo.store.FastingStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel'],
    alias : 'store.FastingStore',
    config : {
        storeId : 'FastingStore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "fasting"},
        autoLoad : true
    }
})
