Ext.define('WireFrameTwo.view.reports.BloodPressureCharts',{
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.bp_report_chart",
    config: {
        height: 200,
//        flex: 1,
        xtype: "chart",
//        store: "FBGstore",
        cls: "chart",
        innerPadding: 10,
        animate: true,
        series: [
            {
                type: "line",
                xField: "date",
                yField: "systolic_reading",
  //              title: "Weight Trend",
                style: {
                    stroke: "lightblue",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "blue",
                    radius: 2,
                    lineWidth: 3
                }
            },
            {
                type: "line",
                xField: "date",
                yField: "systolic_target",
//                title: "HBA1C Trend",
                style: {
                    stroke: "#4C4C4C",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#000000",
                    radius: 2,
                    lineWidth: 2
                }
            },
            {
                type: "line",
                xField: "date",
                yField: "dystolic_reading",
//                title: "HBA1C Trend",
                style: {
                    stroke: "#ff7f7f",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "red",
                    radius: 2,
                    lineWidth: 2
                }
            },
            {
                type: "line",
                xField: "date",
                yField: "dystolic_target",
//                title: "HBA1C Trend",
                style: {
                    stroke: "#4C4C4C",
                    lineWidth: 3
                },
                marker: {
                    type: "circle",
                    stroke: "#000000",
                    radius: 2,
                    lineWidth: 2
                }
            }
        ],
        axes: [
            {
                type: "numeric",
                position: "left",
                majorTickSteps: 0,
                minimum : 60,
                grid: {
                    even: {
                        fill: "#f9f9f9"
                    }
                }
            },
            {
                type: "category",
                title: {
                    fontSize: 15,
                    text: "Blood Pressure Trend"
                },
                position: "bottom"
            }
        ]
    }
});
