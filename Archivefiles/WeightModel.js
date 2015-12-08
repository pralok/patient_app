Ext.define('WireFrameTwo.model.WeightModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date','current_weight','target_weight'],
        proxy : {
            url : 'WeightData.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'chartdata'
            }
        }
    }
})
