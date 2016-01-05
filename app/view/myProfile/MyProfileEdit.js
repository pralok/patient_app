Ext.define('WireFrameTwo.view.myProfile.MyProfileEdit',{
    extend : 'Ext.form.Panel',
    requires : ['Ext.Toolbar','Ext.Img','Ext.field.Text','Ext.field.TextArea',
        'Ext.picker.Date','Ext.field.Select','Ext.field.Number'],
    xtype : 'profileEdit',
    config :{
        fullscreen : true,
        scrollable : true,
        items : [{
            xtype: 'toolbar',
            items: [{
                xtype : 'button',
                text : 'save',
                ui : 'confirm',
                action : 'save'
            },{
                xtype: 'spacer'
            },{
                xtype: 'button',
                text: 'cancel',
                ui: 'decline',
                action: 'hide'
            }]
        },
        /*{
            itemId: 'loadedImage',
            xtype: 'img',
            src: './resources/data/user.jpeg',
            width: '200px',
            height: '200px',
            style: 'margin: auto;margin-top:15px;'
        },
        {
            itemId: 'fileLoadBtn',
            xtype: 'fileupload',
            autoUpload: true,
            loadAsDataUrl: true,
            style : 'width : 200px;margin:auto;;',
            states: {
                browse: {
                    text: 'Profile Picture'
                },
                ready: {
                    text: 'Load'
                },

                uploading: {
                    text: 'Loading',
                    loading: true
                }
            }
        },
        */{
            xtype : 'fieldset',
            label : 'Update Profile',
            name : 'updated_profile',
            items : [{
                xtype: 'textfield',
                label: 'First Name',
                labelWrap : true,
                name: 'fName'
            },{
                xtype: 'textfield',
                label: 'Last Name',
                labelWrap : true,
                name: 'lname'
            },{
              xtype : 'datepickerfield',
              labelWrap : true,
              label : 'Date of Birth',
              value : new Date(),
              name : 'dob'
            },{
                xtype: 'selectfield',
                label: 'Gender',
                labelWrap : true,
                name: 'gender',
                options: [
                    {text: 'Male',  value: 'male'},
                    {text: 'Female', value: 'female'}
                ]
            },{
                xtype: 'selectfield',
                label: 'Diabetes Type',
                labelWrap : true,
                name: 'diab_type',
                options: [
                    {text: 'Type 1',  value: 'type1'},
                    {text: 'Type 2', value: 'type2'}
                ]
            },{
                xtype: 'textareafield',
                label: 'Address',
                labelWrap : true,
              name: 'address'
            },{
                xtype: 'numberfield',
                label: 'Mobile No.',
                labelWrap : true,
                name: 'contact'
            },{
                xtype: 'numberfield',
                label: 'Emergency Contact',
                labelWrap : true,
                name: 'emg_contact'
            },{
                xtype : 'textareafield',
                label : 'Allergy',
                labelWrap : true,
                name : 'allergy'
            },{
                xtype : 'textareafield',
                label : 'Medical<br/> History',
                labelWrap : true,
                name : 'history'
            }
            ]
        }]
    }
})
