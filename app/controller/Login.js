Ext.define('WireFrameTwo.controller.Login',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.login.LoginPage','WireFrameTwo.view.news.newslist'],
        models : ['WireFrameTwo.model.UserSession'],
        refs : {
            loginPage : 'loginPage',
            loginButton : 'loginPage button[action="Login"]',
            errorMsg : 'loginPage #loginError',

            homePage : 'newslist'
        },
        control : {
            loginButton : {
                tap : 'Login'
            }
        }
    },

    Login : function() {
        var me = this;
        var LoginValues = this.getLoginPage().getValues();
        var username = LoginValues.username;
        var password = LoginValues.password;

        Ext.Ajax.request({
            url: 'http://squer.mirealux.com/wdm-pm-api/login',//abc-abc
            method: 'post',
            params: {
                username: username,
                password: password,
                timestamp : new Date().getTime()
            },
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);

                if (result.success === true) {
                    //reset fields
                    me.getLoginPage().reset();

                    //hide error msg if visible
                    if(! me.getErrorMsg().isHidden()){
                        me.getErrorMsg().hide();
                    };
                    // add a session local storage by passing ref id
                    var refID = result.reference_id;
                    console.log(refID);
                    me.createUserSession(refID);

                    // change view
                    me.ChangeView();
                } else {
                  console.log(result);
                  // show failure msg
                  me.getErrorMsg().show();
                  console.log("login failed");
                }
            },
            failure: function () {
                // show connection error loginError
                console.log("connection error");
            }
        })
    },

    createUserSession : function(refID){
        var myStore = Ext.getStore('SessionStore');
        if(myStore.getCount()){
            myStore.removeAll();
        }
        var SessionModel = Ext.create('WireFrameTwo.model.UserSession',{
            SessionStatus : true,
            refID : refID
        });
        myStore.add(SessionModel);
        //sync store
        myStore.sync();
    },

    createView : function(){
        Ext.create('WireFrameTwo.view.news.newslist');
    },

    ChangeView : function(){
        this.createView();
        var HomePage = this.getHomePage();
        Ext.Viewport.animateActiveItem(HomePage,{
            type : 'slide',
            direction : 'left'
        });
    }
})
