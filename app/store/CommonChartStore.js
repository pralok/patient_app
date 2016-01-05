Ext.define('WireFrameTwo.store.CommonChartStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel','Ext.data.proxy.Rest'],
    alias : 'store.CommonChartStore',
    config : {
        storeId : 'CommonChartStore',
        model : 'WireFrameTwo.model.CommonModel',
        autoLoad : true
    }
})
