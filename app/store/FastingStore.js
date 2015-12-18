Ext.define('WireFrameTwo.store.FastingStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel','Ext.data.proxy.Rest'],
    alias : 'store.FastingStore',
    config : {
        storeId : 'FastingStore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "fasting"},
        autoLoad : true
    }
})
