Ext.define('WireFrameTwo.view.Alarms.TimePickerField', {
    extend: "Ext.field.Text",
    requires : ['Ext.picker.Picker'],
    xtype: "timepickerfield",
    constructor: function (config) {
        var i,
            data_hours = [],
            data_minuts = [],
            data_AMPM = [],
        //stringVal,
            that = this;
        for(i=1; i<13; i++) {
            data_hours.push({
                text: i,
                value: i
            });
        }
/*        data_minuts.push({
            text: '00',
            value: '00'
        });
*///        var val = 0;
        for(i=0; i<59; i+=5) {
            if(i < 9){
                val_string = '0' + i.toString();
            }else{
                val_string = i.toString();
            };
            data_minuts.push({
                text: val_string,
                value: val_string
            });
//            val = val + 5;
        }
        data_AMPM.push({
            text:'PM',
            value:'PM'
        });
        data_AMPM.push({
            text:'AM',
            value:'AM'
        });

        if(Ext.os.deviceType == 'Desktop'){
            data_hours.push({
                text: '',
                value: ''
            });
            data_minuts.push({
                text: '',
                value: ''
            });
            data_AMPM.push({
                text:'',
                value:''
            });
        }

        // Make the time picker...

        this.picker = Ext.create("Ext.Picker", {
            hidden: true,
            zIndex: 9999,
            slots: [{
                name: "hours",
                title: "Hours",
                data: data_hours
            },
                {
                    name: "minuts",
                    title: "Minuts",
                    data: data_minuts
                },
                {
                    name: "AMPM",
                    title: "test",
                    data: data_AMPM
                }
            ],
            listeners: {
                change: function (picker, values) {
                    that.setValue(values.hours+':'+values.minuts+' '+values.AMPM);
                }
            }
        });

        Ext.Viewport.add(this.picker);

        // We want to release focus on the field so that the keyboard doesn't show up
        // while we're picking a time.

        this.on("focus", function (field, e) {
            that.picker.show();
            field.blur();
        });

        this.callParent(arguments);
    }
});