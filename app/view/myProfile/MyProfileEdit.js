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
        },{
            itemId: 'loadedImage',
            xtype: 'img',
            src: 'user.jpeg',
            width: '200px',
            height: '200px',
            style: 'margin: auto;margin-top:15px;'
        }, {
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
        },{
            xtype : 'fieldset',
            label : 'Update Profile',
            name : 'updated_profile',
            items : [{
                xtype: 'textfield',
                label: 'First Name',
                name: 'fName'
            },{
                xtype: 'textfield',
                label: 'Last Name',
                name: 'lname'
            },{
                xtype : 'textfield',
                label : 'Date of Birth',
                name : 'dob',
                component: {type: 'date',value : {year: 1989, day: 1, month: 5} }

            }, {
                xtype: 'selectfield',
                label: 'Gender',
                name: 'gender',
                options: [
                    {text: 'Male',  value: 'male'},
                    {text: 'Female', value: 'female'}
                ]
            },{
                xtype: 'selectfield',
                label: 'Diabetes <br/>Type',
                name: 'diab_type',
                options: [
                    {text: 'Type 1',  value: 'type1'},
                    {text: 'Type 2', value: 'type2'}
                ]
            },{
                xtype: 'textareafield',
                label: 'Address',
                name: 'address'
            }, {
                xtype: 'numberfield',
                label: 'Mobile No.',
                name: 'contact'
            },{
                xtype: 'numberfield',
                label: 'Emergency<br/> Contact',
                name: 'emg_contact'
            },{
                xtype : 'textareafield',
                label : 'Allergy',
                name : 'allergy'
            },{
                xtype : 'textareafield',
                label : 'Medical<br/> History',
                name : 'history'
            }
            ]
        }]
    }
})
