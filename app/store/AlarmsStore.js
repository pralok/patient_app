Ext.define('WireFrameTwo.store.AlarmsStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.AlarmModel'],
    alias : 'store.AlarmsStore',
    config : {
        storeId : 'AlarmsStore',
        model : 'WireFrameTwo.model.AlarmModel',
        autoLoad : true
    }
})
