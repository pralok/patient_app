Ext.define('WireFrameTwo.store.FaqStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.FaqsModel','Ext.data.proxy.Rest'],
    alias : 'store.faqStore',
    config : {
        storeId : 'faqStore',
        model : 'WireFrameTwo.model.FaqsModel',
        autoLoad : true
    }
})
