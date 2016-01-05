Ext.define('WireFrameTwo.view.reports.FastingCharts',{
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.fasting_report_chart",
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
                yField: "value",
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
                yField: "target_value",
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
                minimum : 60,
                majorTickSteps: 0,
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
                    text: "Fasting Trend"
                },
                position: "bottom"

            }
        ]
    }
});
