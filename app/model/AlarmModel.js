Ext.define('WireFrameTwo.model.AlarmModel',{
    extend : 'Ext.data.Model',
    config : {
        identifier : 'uuid',
        fields : ['Aid', 'hour', 'minute', 'AmPm' , 'Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'],
        proxy : {
            type : 'localstorage',
            id : 'my-tasks'
        }
    }
});
