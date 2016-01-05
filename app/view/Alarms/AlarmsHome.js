Ext.define('WireFrameTwo.view.Alarms.AlarmsHome', {
    extend : 'Ext.Panel',
    requires: ['WireFrameTwo.view.ToolBar','WireFrameTwo.store.AlarmsStore',
    'Ext.Audio','Ext.tab.Panel','WireFrameTwo.store.RefillStore'],
    xtype : 'alarmHome',
    config: {
        items : [
        {
            xtype : 'toolbarmenu'
        },
        {
            xtype : 'audio',
            id : 'AlarmSound',
            url : 'resources/data/alarm.mp3',
            autoResume : false,
            loop : true,
            volume : 0.3,
            hidden : true
        },{
          xtype : 'tabpanel',
          height : '100%',
          tabBarPosition : 'bottom',
          items : [
            {
              title: 'Dosage',
              iconCls: 'favorites',
              items : [
                  {
                    xtype : 'list',
                    itemId : 'dosage_list',
                    emptyText : 'You do not have any Alarms set',
                    itemTpl : ''.concat('{title}<br/>{hour} : {minute} {AmPm}<br/>',
                        '<div class="circle {Sun}">S</div>',
                        '<div class="circle {Mon}">M</div>',
                        '<div class="circle {Tue}">T</div>',
                        '<div class="circle {Wed}">W</div>',
                        '<div class="circle {Thu}">T</div>',
                        '<div class="circle {Fri}">F</div>',
                        '<div class="circle {Sat}">S</div><br>'),
                    store : {
                        type : 'AlarmsStore'
                    },
                    height : '100%'
        //          ,grouped: true

                  }
              ]
            },{
              title: 'Refill',
              iconCls: 'bookmarks',
              items : [
                  {
                    xtype : 'list',
                    itemId : 'refill_list',
                    emptyText : 'You do not have any Alarms set',
                    itemTpl : ''.concat('{title}<br/>due on {date}'),
                    store : {
                        type : 'RefillStore'
                    },
                    height : '100%'
                }
              ]
            }
          ]
        }
        ]
    },
    initialize : function(){
        var toolbar = this.down('toolbarmenu');
        toolbar.setTitle('Reminders');
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
