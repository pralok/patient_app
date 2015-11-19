Ext.define('WireFrameTwo.model.RefillModel',{
    extend : 'Ext.data.Model',
    config : {
        identifier : 'uuid',
        fields : ['Aid','title', 'date'],
        proxy : {
            type : 'localstorage',
            id : 'my-refills'
        }
    }
});
