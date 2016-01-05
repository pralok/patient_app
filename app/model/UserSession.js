Ext.define('WireFrameTwo.model.UserSession',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['SessionStatus', 'refID'],
        proxy : {
            type : 'localstorage'
        }
    }
});