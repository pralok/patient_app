Ext.define('WireFrameTwo.store.PPGstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.CommonModel'],
    alias : 'store.PPGstore',
    config : {
        storeId : 'PPGstore',
        model : 'WireFrameTwo.model.CommonModel',
        filters : { property : "type", value : "post_prandial"},
        autoLoad : true
    }
})
