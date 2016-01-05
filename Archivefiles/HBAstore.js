Ext.define('WireFrameTwo.store.HBAstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.HBAmodel'],
    alias : 'store.HBAstore',
    config : {
        storeId : 'HBAstore',
        model : 'WireFrameTwo.model.HBAmodel',
//        filters : { property : "type", value : "type1"},
        autoLoad : true
    }
})
