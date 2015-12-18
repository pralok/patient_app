Ext.define('WireFrameTwo.controller.Alarms',{
	extend : 'Ext.app.Controller',
	config : {
		views : ['WireFrameTwo.view.Alarms.AlarmsHome',
		'Ext.util.DelayedTask',
		'WireFrameTwo.view.Alarms.AddReminder'],
		refs : {
			//views
			alramView : 'alarmHome',
			addReminderView : 'addreminder',

			//selectfield
			alarmFrequency : 'addreminder panel selectfield',
			//buttons
			ReminderType : 'addreminder radiofield[name=type]',
			addReminderButton : 'alarmHome toolbarmenu button[action="add_alarm"]',
			toggleAlarmDays : 'addreminder togglefield',
			saveReminder : 'addreminder toolbar button[action="save"]',
			cancelReminder : 'addreminder toolbar button[action="cancel"]'
		},
		control : {
			alarmFrequency :{
				change : 'onFrequencySelect'
			},
			ReminderType : {
				check : 'onSelectType'
			},
			addReminderButton : {
				tap : 'onNewReminder'
			},
			toggleAlarmDays : {
				change : 'onToggleAlarmDays'
			},
			saveReminder : {
				tap : 'onSaveReminder'
			},
			cancelReminder : {
				tap : 'onCancelReminder'
			}
		}
	},
	onFrequencySelect : function(btn, newValue, oldValue, eOpts){
		var timefield = Ext.ComponentQuery.query('#secondary_timefield')[0];
		if(newValue === 2){
			timefield.setHidden(false);
		}else{
			timefield.setHidden(true);
		}
		console.log(timefield);
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
		// DRY note
		var showItems = Ext.ComponentQuery.query('addreminder panel[cls='+ showtype +']');
		for(var i=0; i < showItems.length ; i++){
			var showitem = showItems[i];
			if(showitem.isHidden()){
				showitem.show();
			}
		}

		var hideItems = Ext.ComponentQuery.query('addreminder panel[cls='+ hidetype +']');
		for(var i=0; i < hideItems.length ; i++){
			var hideitem = hideItems[i];
			if(! hideitem.isHidden()){
				hideitem.hide();
			}
		}
	},

	onNewReminder : function(){
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
	onSaveReminder : function(btn){
		var me = this;
		var ReminderForm = me.getAddReminderView().getValues();
		if(ReminderForm.type == "dosage"){
			myArr = [];
			if(ReminderForm.frequency == 1){
				myArr.push(ReminderForm.time[0]);
			}else{
				console.log(ReminderForm.frequency + " did not match");
				myArr = ReminderForm.time;
			}

			for(var i in myArr){
				var alarm_time = myArr[i];
				console.log(alarm_time);
				if (alarm_time === '') {
					return;
				} else {
					console.log(alarm_time);
					var alarm_time1 = alarm_time.match(/(.*?):(.*?)\s(.*)$/);
					var Myhour = alarm_time1[1];
					var Mymin = alarm_time1[2];
					var MyAmPm = alarm_time1[3];


					if (ReminderForm.Daily === 1) {
						ReminderForm.Sun = ReminderForm.Mon = ReminderForm.Tue = ReminderForm.Wed = ReminderForm.Thu = ReminderForm.Fri = ReminderForm.Sat = 'Yes'
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
						Sun : ReminderForm.Sun,
						Mon : ReminderForm.Mon,
						Tue : ReminderForm.Tue,
						Wed : ReminderForm.Wed,
						Thu : ReminderForm.Thu,
						Fri : ReminderForm.Fri,
						Sat : ReminderForm.Sat,
						title : ReminderForm.reminder_title
					});

					myStore.add(NewAlarm);
					myStore.sync();
					myStore.load();

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
				}
			}
		}else if(ReminderForm.type == "refill"){

			var myStore = Ext.getStore('RefillStore');
			var UId;

			if(myStore.getCount() < 1){
				UId = 1;
			}else{
				UId = Number(myStore.max('Aid')) + 1;
			};

			//add reminder date
			//set a delayed task for it

			var NewAlarm = Ext.create('WireFrameTwo.model.RefillModel',{
				Aid : UId,
				title : ReminderForm.refill_title,
				date : ReminderForm.refill_days_left
			});

			myStore.add(NewAlarm);
			myStore.sync();
			myStore.load();
		}
		me.backToMain();
	},
	onCancelReminder : function(btn){
		console.log('cancel');
		this.backToMain();
	},
	backToMain : function(){
		var alarmStore = Ext.getStore('AlarmsStore');
		alarmStore.load();

		var refillStore = Ext.getStore('RefillStore');
		refillStore.load();

		var AlarmHomeView = this.getAlramView();

		var currentPage = this.getAddReminderView();
		Ext.destroy(currentPage);

		Ext.Viewport.animateActiveItem(AlarmHomeView,{
			type : 'slide',
			direction : 'right'
		});
	}
});
