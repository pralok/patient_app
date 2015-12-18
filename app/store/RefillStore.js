Ext.define('WireFrameTwo.store.RefillStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.RefillModel','Ext.data.proxy.Rest'],
    alias : 'store.RefillStore',
    config : {
        storeId : 'RefillStore',
        model : 'WireFrameTwo.model.RefillModel',
        autoLoad : true
    }
})
