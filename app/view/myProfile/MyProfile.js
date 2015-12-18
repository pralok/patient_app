Ext.define('WireFrameTwo.view.myProfile.MyProfile',{
    extend : 'Ext.Panel',
    requires : ['WireFrameTwo.view.ToolBar','Ext.field.Text','Ext.form.FieldSet','Ext.Img'],
    xtype : 'myProfile',
    config : {
        scrollable : true,
        fullscreen : true,
        items : [
            {
                xtype : 'toolbarmenu'
            },{
                xtype : 'img',
                src : 'resources/data/user.jpeg',
                height : 100,
                width : 100,
                style : 'float:left; margin-bottom:10px;'
            },{
                xtype : 'panel',
                html : 'profile content'
            },{
                xtype : 'fieldset',
                items : [
                    {
                        xtype : 'textfield',
                        label : 'Diabetes<br/>Type',
                        name : 'diab_type',
                        readOnly : true
                    },{
                        xtype : 'textareafield',
                        label : 'Allergies',
                        name : 'allergy',
                        readOnly : true
                    },{
                        xtype : 'textareafield',
                        label : 'Medical<br/> History',
                        name : 'med_history',
                        readOnly : true
                    },{
                        xtype : 'textareafield',
                        label : 'Address',
                        name : 'address',
                        readOnly : true
                    },{
                        xtype : 'textfield',
                        label : 'Mobile No.',
                        name : 'mobile_no',
                        readOnly : true
                    },{
                        xtype : 'textfield',
                        label : 'Emergency<br/> Contact',
                        name : 'emer_cont',
                        readOnly : true
                    }
                ]
            }
        ]
    },
    initialize : function(){
        console.log('MyProfile created');

        this.down('toolbarmenu').add({
            xtype : 'spacer'}
        );
        this.down('toolbarmenu').add({
            xtype : 'button',
            text : 'edit',
            action : 'edit',
            ui : 'confirm'
        });
    }
})
