Ext.define('WireFrameTwo.view.myDoctor.DoctorProfile', {
    extend: 'Ext.form.Panel',
    xtype: 'doctorProfile',
    requires: ['WireFrameTwo.view.ToolBar', 'Ext.Img', 'Ext.field.TextArea',
        'WireFrameTwo.view.ToolBar', 'Ext.ux.Fileup'],
    config: {
        fullscreen: true,
        scrollable: true,
        items: [{
            xtype: 'toolbarmenu'
        },{
            itemId: 'loadedImage',
            xtype: 'img',
            src: 'user.jpeg',
            width: '200px',
            height: '200px',
            style: 'margin: auto;margin-top:15px;'
        },{
            xtype : 'panel',
            html : 'Dr. ABC ',
            style : 'text-align:center;margin-top:10px;'
        },{
            xtype: 'fieldset',
            title: 'Doctor Profile',
            items: [
                {
                    xtype: 'textfield',
                    readOnly : true,
                    label: 'Degrees',
                    name: 'degrees',
                    readOnly : true
                }, {
                    xtype: 'textfield',
                    label: 'Specialities',
                    name: 'specialities',
                    readOnly : true
                }, {
                    xtype: 'textareafield',
                    label: 'Address',
                    name: 'address',
                    readOnly : true
                }, {
                    xtype: 'textfield',
                    label: 'Contact',
                    name: 'contact',
                    readOnly : true
                }, {
                    xtype: 'textfield',
                    label: 'Visiting Time',
                    readOnly : true
                },{
                    xtype : 'textfield',
                    label : 'Experience',
                    name : 'experience',
                    readOnly : true
                },{
                    xtype : 'textfield',
                    label : 'Email',
                    name : 'email',
                    readOnly : true
                },{
                    xtype : 'textfield',
                    label : 'Phone',
                    name : 'phone',
                    readOnly : true
                }
            ]
        }]
    },
    initialize: function () {
        console.log("created doctor profile view");
    }
})