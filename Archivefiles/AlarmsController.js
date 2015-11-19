Ext.define('WireFrameTwo.controller.Alarms',{
	extend : 'Ext.app.Controller',
	config : {
		views : ['WireFrameTwo.view.Alarms.AlarmsHome',
		'WireFrameTwo.view.Alarms.AddAlarmPage','Ext.util.DelayedTask',
		'WireFrameTwo.view.Alarms.AddReminder'],
		refs : {
			alramView : 'alarmHome',
			addAlarmView : 'addalarm',

			addAlarmButton : 'alarmHome toolbarmenu button[action="add_alarm"]',
			toggleAlarmDays : 'addalarm togglefield',
			saveAlarm : 'addalarm toolbar button[action="save"]',
			cancelAlarm : 'addalarm toolbar button[action="cancel"]',

			alarmType : 'addreminder radiofield[name=type]'
		},
		control : {
			addAlarmButton : {
				tap : 'onNewAlarm'
			},
			toggleAlarmDays : {
				change : 'onToggleAlarmDays'
			},
			saveAlarm : {
				tap : 'onSaveAlarm'
			},
			cancelAlarm : {
				tap : 'onCancelAlarm'
			},

			alarmType : {
				check : 'onSelectType'
			}
		}
	},
	onSelectType : function(button){
		var me = this;
		if(button.getValue() == "dosage"){
			me.toggleformTypes('dosage','refill');
		}else if(button.getValue() == "refill"){
			me.toggleformTypes('refill','dosage');
		};
	},
	toggleformTypes : function(showtype,hidetype){

		var showItems = Ext.ComponentQuery.query('addreminder panel[cls='+ showtype +']');
		for(var i=0; i < showItems.length ; i++){
			var showitem = showItems[i];
			if(showitem.isHidden()){
				showitem.show();
			}
		}

//		var hideItems = Ext.select('.'+hidetype );

		var hideItems = Ext.ComponentQuery.query('addreminder panel[cls='+ hidetype +']');
		for(var i=0; i < hideItems.length ; i++){
			var hideitem = hideItems[i];
			if(! hideitem.isHidden()){
				hideitem.hide();
			}
		}
	},

	onNewAlarm : function(){
		console.log("tapped a button");
		var AddAlarmPage = Ext.create('WireFrameTwo.view.Alarms.AddReminder');
		Ext.Viewport.animateActiveItem(AddAlarmPage,{
			type : 'slide',
			direction : 'left'
		});
	},
	onToggleAlarmDays : function(field, newValue, oldValue){
		var CheckboxArray = Ext.ComponentQuery.query('#checkboxes')[0];
		if(newValue === 1 && oldValue == 0){
			CheckboxArray.hide();
		}else if(newValue === 0){
			CheckboxArray.show();
		}
	},
	onSaveAlarm : function(btn){
		var me = this;
		console.log('save');
		var NewForm = Ext.ComponentQuery.query('addalarm')[0];
		var alarm_time = NewForm.getValues().time;

		if (alarm_time === '') {
			return;
		} else {
			console.log(alarm_time);
			var alarm_time1 = alarm_time.match(/(.*?):(.*?)\s(.*)$/);
			var Myhour = alarm_time1[1];
			var Mymin = alarm_time1[2];
			var MyAmPm = alarm_time1[3];

			var Days = NewForm.getValues();

			if (Days.Daily === 1) {
				Days.Sun = Days.Mon = Days.Tue = Days.Wed = Days.Thu = Days.Fri = Days.Sat = 'Yes'
			}

			if (MyAmPm == 'PM' && Number(Myhour) != 12) {
				MyLocalHour = Number(Myhour) + 12;
			} else {
				MyLocalHour = Number(Myhour);
			}

			var TimeLeft = (MyLocalHour - new Date().getHours()) * 60 * 60 +
			(Number(Mymin) - new Date().getMinutes()) * 60 -
			(new Date().getSeconds());

			if (TimeLeft < 0) {
				TimeLeft = TimeLeft + (24 * 60 * 60);
			}

			console.log('Alarm goes on in : ' + TimeLeft + ' seconds');

			var myStore = Ext.getStore('AlarmsStore');
			var UId;

			if(myStore.getCount() < 1){
				UId = 1;
			}else{
				UId = Number(myStore.max('Aid')) + 1;
			}

			var NewAlarm = Ext.create('WireFrameTwo.model.AlarmModel',{
				Aid : UId,
				hour : Myhour ,
				minute : Mymin ,
				AmPm : MyAmPm,
				Sun : Days.Sun,
				Mon : Days.Mon,
				Tue : Days.Tue,
				Wed : Days.Wed,
				Thu : Days.Thu,
				Fri : Days.Fri,
				Sat : Days.Sat
			});

			myStore.add(NewAlarm);
			myStore.sync();

			//setting up task
			var task = Ext.create('Ext.util.DelayedTask', function(){
				var alarm = Ext.ComponentQuery.query('#AlarmSound')[0];
				alarm.play();

				//load menu
				Ext.Msg.show({
					title: 'Alarm !!',
					message: 'Time for reminder!',
					width: 300,
					buttons: [{text: 'Cancel', itemId: 'cancel', ui: 'action'}],
					fn: function(buttonId) {
						if(buttonId === 'cancel'){
							alarm.stop();
						}
					}
				});
			});

			task.delay(TimeLeft * 1000);
			me.backToMain();
		}
	},
	onCancelAlarm : function(btn){
		console.log('cancel');
		this.backToMain();
	},
	backToMain : function(){
		var alarmStore = Ext.getStore('AlarmsStore');
		alarmStore.load();

		var AlarmHomeView = this.getAlramView();

		var currentPage = this.getAddAlarmView();
		Ext.destroy(currentPage);

		Ext.Viewport.animateActiveItem(AlarmHomeView,{
			type : 'slide',
			direction : 'right'
		});
	}
});
