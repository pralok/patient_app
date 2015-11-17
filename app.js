Ext.application({
    name: 'WireFrameTwo',

    controllers : ['RefId','Login','Main','News','Profile','Report','Alarms'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Load the Menu
        var menu = Ext.create('WireFrameTwo.view.MenuBar');
        Ext.Viewport.setMenu(menu, {
            side: 'left',
            reveal: true
        });
        var SessionStore = Ext.getStore('SessionStore');
        console.log(SessionStore.getAt(0));
        if(SessionStore.getAt(0)){
          Ext.Viewport.setActiveItem(Ext.create('WireFrameTwo.view.news.FeedsPage'));
        }else{
          Ext.Viewport.add(Ext.create('WireFrameTwo.view.login.LoginPage'));
        }
    }
});
