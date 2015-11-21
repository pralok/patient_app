Ext.define('WireFrameTwo.model.NotificationModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date', 'message'],
        proxy : {
            url : 'notifications.json',
            type : 'rest',
            method : 'POST',
            reader : {
                type : 'json',
                rootProperty : 'notifications'
            }
        }
    }
})
