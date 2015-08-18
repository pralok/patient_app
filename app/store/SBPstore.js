Ext.define('WireFrameTwo.store.SBPstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.ReportModel'],
    alias : 'store.SBPstore',
    config : {
        storeId : 'SBPstore',
        model : 'WireFrameTwo.model.ReportModel',
        filters : { property : "type", value : "type5"},
        autoLoad : true
    }
})
