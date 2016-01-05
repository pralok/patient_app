Ext.define('WireFrameTwo.store.BPStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.BPModel','Ext.data.proxy.Rest'],
    alias : 'store.BPStore',
    config : {
        storeId : 'BPStore',
        model : 'WireFrameTwo.model.BPModel',
//        filters : { property : "type", value : "type1"},
        autoLoad : true
    }
})
