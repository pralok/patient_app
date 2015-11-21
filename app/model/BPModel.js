Ext.define('WireFrameTwo.model.BPModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date','systolic_reading',
        'systolic_target','dystolic_reading','dystolic_target'],
        proxy : {
            url : 'BloodPressureData.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'chartdata'
            }
        }
    }
})
