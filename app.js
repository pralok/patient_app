Ext.application({
    name: 'WireFrameTwo',

    controllers : ['RefId','Login','Home','Profile','Report','Alarms'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        /*
        //infinite loop request
        setInterval(function() {
          console.log("run request");
        }, 1000);
        */
        var SessionStore = Ext.getStore('SessionStore');
        console.log(SessionStore.getAt(0));
        if(SessionStore.getAt(0)){
          Ext.Viewport.setActiveItem(Ext.create('WireFrameTwo.view.home.HomePage'));
        }else{
          Ext.Viewport.add(Ext.create('WireFrameTwo.view.login.LoginPage'));
        }
    }
});
