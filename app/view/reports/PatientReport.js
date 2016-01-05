Ext.define('WireFrameTwo.view.reports.PatientReport',{
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.report_chart",
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
                yField: "hba_reading",
                title: "HBA1C Trend",
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
                yField: "target_reading",
                title: "HBA1C Trend",
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
            }
        ],
        axes: [
            {
                type: "numeric",
                position: "left",
                majorTickSteps: 0,
                title: {
                    fontSize: 15,
                    text: "HBA Trend"
                },
                grid: {
                    even: {
                        fill: "#f9f9f9"
                    }
                }
            },
            {
                type: "category",
                position: "bottom"
            }
        ]
    }
});
