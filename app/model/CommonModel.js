Ext.define('WireFrameTwo.model.CommonModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date','value','target_value','type'],
        proxy : {
            url : 'resources/data/CommonChartData.json',//'WeightData.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'chartdata'
            }
        }
    }
})
