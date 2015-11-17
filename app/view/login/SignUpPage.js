Ext.define('WireFrameTwo.view.login.SignUpPage',{
  extend : 'Ext.form.Panel',
  requires : ['Ext.form.FieldSet','Ext.Button', 'Ext.Panel','Ext.field.Text',
  'Ext.field.Password','Ext.field.Radio','Ext.field.TextArea',
  'Ext.field.Number','Ext.field.Email','Ext.Toolbar'],
  xtype : 'SignupPage',
  config : {
    fullscreen : true,
    scrollable : true,
    id : 'signuplayout',
    items : [
      {
        xtype : 'toolbar',
        docked: 'top',
        title: 'SignUp Form',
        items : [
          {
            xtype : 'button',
            ui : 'decline',
            action : 'cancelReg',
            text : 'cancel'
          }
        ]
      },{
        xtype : 'fieldset',
        items : [
          {
            xtype : 'textfield',
            name : 'doctorId',
            placeHolder : 'Doctor Code*'
          },
          {
            xtype : 'textfield',
            name : 'username',
            placeHolder : 'Username*'
          },{
            xtype : 'textfield',
            name : 'fname',
            placeHolder : 'First Name*'
          },{
            xtype : 'textfield',
            name : 'lname',
            placeHolder : 'Last Name'
          },{
            xtype: 'fieldset',
            title: 'Select Gender*',
            items : [
              {
                xtype : 'radiofield',
                name : 'gender',
                value : 'male',
                label : 'Male',
                checked : true,
              },{
                xtype : 'radiofield',
                name : 'gender',
                value : 'female',
                label : 'Female'
              }
            ]
          },{
            xtype : 'textareafield',
            name : 'address',
            placeHolder : 'Address',
            maxRows: 3,
          },{
            xtype : 'numberfield',
            name : 'contactNumber',
            placeHolder : 'Contact Number*',
            maxLength : 10,
          },{
            xtype : 'numberfield',
            name : 'emergencyContact',
            placeHolder : 'Emergency Contact Number*',
            maxLength : 10,
          },{
            xtype : 'emailfield',
            name : 'email',
            placeHolder : 'Email*'
          },{
            xtype : 'passwordfield',
            name : 'password',
            placeHolder : 'Password*'
          },{
            xtype : 'passwordfield',
            name : 'pwd',
            placeHolder : 'Confirm Password*'
          },{
            xtype: 'textfield',
            label: 'BirthDate*',
            name : 'dob',
            component: {type: 'date'}
          }]
        },
        {
          xtype : 'button',
          ui : 'action',
          text : 'Sign Up',
          action : 'Register'
        }
      ]
    },
    initialize : function(){
      console.log('Signup view created');
    }
  })
