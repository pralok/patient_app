Ext.define('WireFrameTwo.store.NotificationStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.NotificationModel'],
    alias : 'store.notificationStore',
    config : {
        storeId : 'notificationStore',
        model : 'WireFrameTwo.model.NotificationModel',
        autoLoad : true
    }
})
