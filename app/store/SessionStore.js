Ext.define('WireFrameTwo.store.SessionStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.UserSession'],
    config : {
        storId : 'SessionStore',
        model : 'WireFrameTwo.model.UserSession',
        autoLoad : true
    }
});
