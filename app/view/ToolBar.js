Ext.define('WireFrameTwo.view.ToolBar',{
    extend : 'Ext.Toolbar',
    requires : ['Ext.Button'],
    xtype : 'toolbarmenu',
//    styleHtmlContent : true,
    config : {
        docked : 'top',
        items : [
            {
                xtype : 'button',
                text : 'Home',
                action : 'HomeButton',
                itemId : 'HomeButton'
            }
        ]
    }
})
