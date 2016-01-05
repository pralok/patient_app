Ext.define('WireFrameTwo.model.FaqsModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['question', 'answer'],
        proxy : {
            url : 'resources/data/faqs.json',
            type : 'rest',
            method : 'POST',
            reader : {
                type : 'json',
                rootProperty : 'faqs'
            }
        }
    }
})
