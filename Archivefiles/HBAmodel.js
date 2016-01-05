Ext.define('WireFrameTwo.model.HBAmodel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date','hba_reading','target_reading'],
        proxy : {
            url : 'HBAdata.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'chartdata'
            }
        }
    }
})
