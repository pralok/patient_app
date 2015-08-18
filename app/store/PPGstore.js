Ext.define('WireFrameTwo.store.PPGstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.ReportModel'],
    alias : 'store.PPGstore',
    config : {
        storeId : 'PPGstore',
        model : 'WireFrameTwo.model.ReportModel',
        filters : { property : "type", value : "type3"},
        autoLoad : true
    }
})
