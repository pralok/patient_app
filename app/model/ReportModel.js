Ext.define('WireFrameTwo.model.ReportModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['date','type','value'],
        proxy : {
            url : 'ChartData.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'chartdata'
            }
        }
    }
})