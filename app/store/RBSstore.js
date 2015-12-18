Ext.define('WireFrameTwo.store.RBSstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.ReportModel','Ext.data.proxy.Rest'],
    alias : 'store.RBSstore',
    config : {
        storeId : 'RBSstore',
        model : 'WireFrameTwo.model.ReportModel',
        filters : { property : "type", value : "type4"},
        autoLoad : true
    }
})
