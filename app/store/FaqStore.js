Ext.define('WireFrameTwo.store.FaqStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.FaqsModel'],
    alias : 'store.faqStore',
    config : {
        storeId : 'faqStore',
        model : 'WireFrameTwo.model.FaqsModel',
        autoLoad : true
    }
})
