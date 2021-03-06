Ext.define('WireFrameTwo.store.WeightStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel'],
    alias : 'store.WeightStore',
    config : {
        storeId : 'WeightStore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "weight"},
        autoLoad : true
    }
})
