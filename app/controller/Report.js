Ext.define('WireFrameTwo.controller.Report',{
    extend : 'Ext.app.Controller',
//    requires: ['Ext.window.Toast'],
    config : {
        views : ['WireFrameTwo.view.reports.ReportsHome','WireFrameTwo.view.reports.NewReportForm'],
        refs : {
            //views
            reportView : 'myReports',
            reportForm : 'newReport',

            //buttons
            addReport : 'myReports toolbarmenu button[action="add_report"]',
            submitReport : 'newReport toolbar button[action="submit"]',
            closeReport : 'newReport toolbar button[action="close"]'
        },
        control : {
            addReport : {
                tap : 'onAddReport'
            },
            submitReport : {
                tap : 'onReportSubmit'
            },
            closeReport : {
                tap : 'onReportClose'
            }
        }
    },
    onAddReport : function(){
        //create form view
        Ext.create('WireFrameTwo.view.reports.NewReportForm');
        var myReportForm = this.getReportForm();
        Ext.Viewport.animateActiveItem(myReportForm,{
            type : 'slide',
            direction : 'up'
        });
    },

    onReportSubmit : function(){
        var me = this;
        //fetch form values
        var FormValues = this.getReportForm().getValues();
        var Report_type = FormValues.report_type;
        var Report_Value = FormValues.report_value;
        // add validation


        //submit a request to server with refId
        var RefId = this.getApplication().getController('RefId').passRefId();

        //make an ajax request with ref id
        Ext.Ajax.request({
            url: 'AddReport.json',
            method: 'post',
            params: {
                refId : RefId,
                Report_type : Report_type,
                Report_Value : Report_Value
            },

            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);
                if (result.success === true) {
                    //get all the stores
                    //reload stores
                    me.reloadStore('HBAstore');
                    me.reloadStore('DBPstore');
                    me.reloadStore('FBGstore');
                    me.reloadStore('PPGstore');
                    me.reloadStore('RBSstore');
                    me.reloadStore('SBPstore');

                    //get view(no need to recreate)
                    var ChartView = me.getReportView();

                    //show toast success message
                    Ext.toast('Hello Sencha!');

                } else {
                    // show failure msg
                    console.log("show failure msg");
                }
            },
            failure: function () {
                // show connection error
                console.log("network error");
            }
        })
    },
    onReportClose : function(){
        var myReports = this.getReportView();

        Ext.Viewport.animateActiveItem(myReports,{
            type : 'slide',
            direction : 'down'
        });
    },

    reloadStore : function(storeId){
        var myStore = Ext.getStore(storeId);
        myStore.load();

    }
})