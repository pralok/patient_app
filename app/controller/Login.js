Ext.define('WireFrameTwo.controller.Login',{
    extend : 'Ext.app.Controller',
    requires : ['Ext.Toast'],
    config : {
        views : ['WireFrameTwo.view.login.LoginPage','WireFrameTwo.view.news.FeedsPage'
      ,'WireFrameTwo.view.login.SignUpPage'],
        models : ['WireFrameTwo.model.UserSession'],
        refs : {
            loginPage : 'loginPage',
            loginButton : 'loginPage button[action="Login"]',
            signUpButton : 'loginPage button[action="SignUp"]',
            errorMsg : 'loginPage #loginError',

            homePage : 'feedsHome',

            signupPage : 'SignupPage',
            registerButton : 'SignupPage button[action="Register"]',
            cancelRegButton : 'SignupPage toolbar button[action="cancelReg"]'
        },
        control : {
            loginButton : {
                tap : 'Login'
            },
            signUpButton : {
              tap : 'SignUp'
            },
            registerButton : {
              tap : 'Register'
            },
            cancelRegButton : {
              tap : 'BackToLogin'
            }
        }
    },

    BackToLogin : function(){
      var me = this;
      var LoginPage = me.getLoginPage();
      Ext.Viewport.animateActiveItem(LoginPage,{
          type : 'slide',
          direction : 'right'
      });
      console.log("back to page");
    },

    Register : function(){
      var me = this;
      var RegForm = me.getSignupPage().getValues();
      console.log(RegForm);

      //validate form
      if(me.IsRegFormValid(RegForm)){
        RegForm.timestamp = new Date().getTime();
        //submit form
        Ext.Ajax.request({
          url: 'UserLogin.json',//abc-abc
          method: 'post',
          params: RegForm,
          success: function (response) {
            var result = Ext.JSON.decode(response.responseText);

            if (result.success === true) {
              //reset fields
              me.getSignupPage().reset();

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
      }
    },

    IsRegFormValid : function(form){
      //validate required fields
      if(form.doctorId == "" ||
      form.username == "" ||
      form.fname == "" ||
      form.gender == "" ||
      form.contactNumber == "" ||
      form.emergencyContact == "" ||
      form.email == "" ||
      form.password == "" ||
      form.pwd == "" ||
      form.dob == ""){
        console.log("required field left empty");
        Ext.toast('Required field can not be left empty');
        return false;
      }
      //password field and confirm pwd match
    if(form.password !== form.pwd){
      console.log("passwords do not match");
      Ext.toast("Passwords do not match");
      return false;
    }
    return true;
    },

    SignUp : function(){
      var me = this;

      //create signup page
      var SignupPage = me.getSignupPage();
      if(! SignupPage){
        Ext.create('WireFrameTwo.view.login.SignUpPage');
        SignupPage = me.getSignupPage();
      }

      //change view
      Ext.Viewport.animateActiveItem(SignupPage,{
          type : 'slide',
          direction : 'left'
      });
      console.log("open signup page");
    },

    Login : function(){
      var me = this;
      var LoginValues = this.getLoginPage().getValues();
      var username = LoginValues.username;
      var password = LoginValues.password;

      //validate form

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
        Ext.create('WireFrameTwo.view.news.FeedsPage');
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
