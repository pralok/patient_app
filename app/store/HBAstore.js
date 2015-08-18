Ext.define('WireFrameTwo.store.HBAstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.ReportModel'],
    alias : 'store.HBAstore',
    config : {
        storeId : 'HBAstore',
        model : 'WireFrameTwo.model.ReportModel',
        filters : { property : "type", value : "type1"},
        autoLoad : true
    }
})
