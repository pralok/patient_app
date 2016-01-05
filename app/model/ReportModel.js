Ext.define('WireFrameTwo.model.ReportModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date','type','value','value_alt'],
        proxy : {
            url : 'resources/data/ChartData.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'chartdata'
            }
        }
    }
})
