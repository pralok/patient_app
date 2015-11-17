Ext.define('WireFrameTwo.view.login.LoginPage',{
    extend : 'Ext.form.Panel',
    requires : ['Ext.form.FieldSet','Ext.Button', 'Ext.Panel','Ext.field.Text','Ext.field.Password'],
    xtype : 'loginPage',
    config : {
        fullscreen : true,
        scrollable : true,
        id : 'loginlayout',
        items : [
            {
                xtype : 'fieldset',
                title : 'Welcome to our App<hr />',
                items : [
                    {
                        xtype : 'textfield',
  //                      label : 'username',
                        name : 'username',
                        placeHolder : 'username'
                    },{
                        xtype : 'passwordfield',
//                        label : 'password',
                        name : 'password',
                        placeHolder : 'password'
                    }]
            },{
                xtype : 'button',
                ui : 'action',
                text : 'LogIn',
                action : 'Login'
            },
            {
                xtype : 'panel',
                html : 'New User ? Sign Up by clicking below',
                styleHtml : true,
                style : 'text-align : center; color : blue; font-size : 0.7em; padding-top : 45px;',
            },
            {
                xtype : 'button',
                ui : 'action',
                text : 'Sign Up',
                action : 'SignUp'
            },
            {
                xtype : 'panel',
                itemId : 'loginError',
                html : 'Incorrect username and password',
                hidden : true,//false,
                styleHtml : true,
                style : 'text-align : center; color : red; font-size : 0.7em; padding-top : 15px;',
                showAnimation : 'fade'
            }
        ]

    },
    initialize : function(){

        console.log('login view created');
    }
})
