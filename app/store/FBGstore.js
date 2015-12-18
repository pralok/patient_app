Ext.define('WireFrameTwo.store.FBGstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.ReportModel','Ext.data.proxy.Rest'],
    alias : 'store.FBGstore',
    config : {
        storeId : 'FBGstore',
        model : 'WireFrameTwo.model.ReportModel',
        filters : { property : "type", value : "type2"},
        autoLoad : true
    }
})
