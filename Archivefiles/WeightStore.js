Ext.define('WireFrameTwo.store.WeightStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.WeightModel'],
    alias : 'store.WeightStore',
    config : {
        storeId : 'WeightStore',
        model : 'WireFrameTwo.model.WeightModel',
//        filters : { property : "type", value : "type1"},
        autoLoad : true
    }
})
