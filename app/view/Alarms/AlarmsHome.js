Ext.define('WireFrameTwo.view.Alarms.AlarmsHome', {
    extend : 'Ext.Panel',
    requires: ['WireFrameTwo.view.ToolBar','WireFrameTwo.store.AlarmsStore','Ext.Audio'],
    xtype : 'alarmHome',
    config: {
        items : [
        {
            xtype : 'toolbarmenu'
        },
        {
            xtype : 'audio',
            id : 'AlarmSound',
            url : 'alarm.mp3',
            autoResume : false,
            loop : true,
            volume : 0.3,
            hidden : true
        },
        {
            xtype : 'list',
            emptyText : 'You do not have any Alarms set',
            itemTpl : ''.concat('{hour} : {minute} {AmPm}',
                '<div class="circle {Sat}">S</div>',
                '<div class="circle {Fri}">F</div>',
                '<div class="circle {Thu}">T</div>',
                '<div class="circle {Wed}">W</div>',
                '<div class="circle {Tue}">T</div>',
                '<div class="circle {Mon}">M</div>',
                '<div class="circle {Sun}">S</div>'),
            store : {
                type : 'AlarmsStore'
            },
            height : '100%'
//          ,grouped: true
        }]
    },
    initialize : function(){
        var toolbar = this.down('toolbarmenu');
        toolbar.add({
            xtype : 'spacer'
        });
        toolbar.add({
            xtype : 'button',
            iconCls : 'add',
            action : 'add_alarm'
        });
    }
})