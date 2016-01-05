Ext.define('WireFrameTwo.store.NotificationStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.NotificationModel','Ext.data.proxy.Rest'],
    alias : 'store.notificationStore',
    config : {
        storeId : 'notificationStore',
        model : 'WireFrameTwo.model.NotificationModel',
        autoLoad : true
        /*
        proxy : {
            url : 'resources/data/notifications.json',
            type : 'rest',
            method : 'POST',
            reader : {
                type : 'json',
                rootProperty : 'notifications'
            }
        }
        */
    },
    initialize : function(){
      console.log('====creating store=====');
    }
})
