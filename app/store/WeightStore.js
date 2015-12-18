Ext.define('WireFrameTwo.store.WeightStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel','Ext.data.proxy.Rest'],
    alias : 'store.WeightStore',
    config : {
        storeId : 'WeightStore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "weight"},
        autoLoad : true
    }
})
