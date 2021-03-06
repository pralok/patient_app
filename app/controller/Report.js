Ext.define('WireFrameTwo.controller.Report',{
    extend : 'Ext.app.Controller',
    requires: ['Ext.Toast'],
    config : {
        views : ['WireFrameTwo.view.reports.ReportsHome','WireFrameTwo.view.reports.NewReportForm'],
        refs : {
          //unused
            //views
            reportView : 'myReports',
            reportForm : 'newReport',

            //select fields
            report_type_selection : 'newReport fieldset selectfield',
            bld_glc_selection : 'newReport panel radiofield[cls="bld_glc_type"]',

            //buttons
            addReport : 'myReports toolbarmenu button[action="add_report"]',
            submitReport : 'newReport toolbar button[action="submit"]',
            closeReport : 'newReport toolbar button[action="close"]'
        },
        control : {
            report_type_selection : {
              change : 'onReportTypeSelect'
            },
            bld_glc_selection : {
              check : 'onBldGlcTypeSelect'
            },
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
    onReportTypeSelect : function(btn, newValue, oldValue, eOpts ){
      //hide this
      console.log("I unselected " + oldValue);
      var hideElement = Ext.ComponentQuery.query('newReport panel[cls='+ oldValue +']')[0];
      hideElement.hide();
      //show this
      console.log("I selected " + newValue);
      var showElement = Ext.ComponentQuery.query('newReport panel[cls='+ newValue +']')[0];
      showElement.show();
    },
    onBldGlcTypeSelect : function(btn, e , eOpts ){
      var ppg_types = Ext.ComponentQuery.query('panel panel[cls=ppg_type]')[0];
      if(btn.getValue() == "ppg"){
        ppg_types.show();
      }else{
        ppg_types.hide();
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
        var report_form = me.getReportForm().getValues();
        console.log(report_form.report_type);
  //      console.log(report_form);
        var report_data = {};
        if(report_form.report_type == "blood_pressure"){
          report_data.sbp = report_form.sbp;
          report_data.dbp = report_form.dbp;
        }else if(report_form.report_type == "hba1c"){
          report_data.hba1c = report_form.hba1c;
        }else if(report_form.report_type == "blood_glucose "){
          report_data.bld_glc_type = report_form.bld_glc_type;
          report_data.reading = report_form.reading;
          if(report_form.bld_glc_type == "ppg"){
            report_data.ppg_type = report_form.ppg_type;
          }
        }else if(report_form.report_type == "weight"){
          report_data.weight = report_form.weight;
        }

        //submit a request to server with refId
        var RefId = this.getApplication().getController('RefId').passRefId();


        Ext.Ajax.request({
            url: 'http://squer.mirealux.com/wdm-pm-api/get-report',
            method: 'post',
            params: {
                reference_id : RefId,
                timestamp : new Date().getTime(),
                report_type : report_form.report_type,
                report_date : report_form.report_date,
                report_time : report_form.report_time,
                report_data : report_data
            },

            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);
                if (result.success === true) {
                    //get and all reload the stores
                    me.reloadStore('HBAstore');
                    me.reloadStore('DBPstore');
                    me.reloadStore('FBGstore');
                    me.reloadStore('PPGstore');
                    me.reloadStore('RBSstore');
                    me.reloadStore('SBPstore');

                    //get view(no need to recreate)
                    var ChartView = me.getReportView();

                    //show toast success message
                    Ext.toast('Report Submitted !');

                } else {
                    // show failure msg
                    console.log("show failure msg");
                    Ext.toast('Unable to submit report');
                }
            },
            failure: function () {
                // show connection error
                console.log("network error");
                Ext.toast('Please check your connection');
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
