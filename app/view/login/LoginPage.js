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
                        styleHtmlCls : true,
                      //  html : '<br />',
                        styleHtml: true,
                        cls : 'username',
                        placeHolder : 'username'
                    },{
                        xtype : 'passwordfield',
//                        label : 'password',
                        name : 'password',
                        styleHtmlCls : true,
                        styleHtml:true,
                        cls : 'password',
                        placeHolder : 'password'
                    }]
            },
            {
            layout: {
          		type: 'hbox',
          	},
          	items: [{
            	xtype: 'spacer',
              width : 10
            },{
                xtype : 'button',
                ui : 'action',
                styleHtml:true,
                styleHtmlCls : true,
                cls : 'button_m',
                flex : 1,
                text : 'LogIn',
                action : 'Login'
            },{
            	xtype: 'spacer',
              width : 10
            },
            {
                xtype : 'button',
                ui : 'action',
                styleHtmlCls : true,
                flex : 1,
                cls : 'button_m',
                text : 'Sign Up',
                action : 'SignUp'
            },{
            	xtype: 'spacer',
              width : 10
            }]
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
