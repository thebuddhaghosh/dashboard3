// alert("Scatter Bubble Chart initialized!");
Highcharts.chart('performanceMatrix', {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy',
        backgroundColor: '#ffffff'
    },
    title: { text: '' },
    xAxis: {
        min: 0,
        max: 60,
        title: { text: 'DQI (0-60)' },
        gridLineWidth: 1,
        plotLines: [{
            value: 30,
            color: '#999',
            dashStyle: 'Dash',
            width: 1,
            zIndex: 3
        }]
    },
    yAxis: {
        min: 0,
        max: 100,
        title: { text: 'Performance (0-100)' },
        gridLineWidth: 1,
        plotLines: [{
            value: 50,
            color: '#999',
            dashStyle: 'Dash',
            width: 1,
            zIndex: 3
        }]
    },
    legend: { enabled: true },
    exporting: { enabled: false },
    credits: { enabled: false },
    tooltip: {
        pointFormat: 'DQI: {point.x}<br>Performance: {point.y}'
    },
    plotOptions: {
        bubble: {
            minSize: 8,
            maxSize: 50,
            marker: {
                fillOpacity: 0.85
            }
        }
    },
    
    series: [
        {
          name: 'Under Performers',
            color: '#8181FF', //#ACACF3
            data: [
                {x:5,y:10,z:30},{x:8,y:20,z:10},{x:12,y:15,z:15},{x:15,y:25,z:12},
                {x:18,y:10,z:18},{x:20,y:30,z:10},{x:22,y:18,z:14},{x:25,y:12,z:16}
            ]
        },

        {
          name: 'Leaders',
            color: '#32C86A', //#84C49C
            data: [
                {x:40,y:20,z:20},{x:42,y:35,z:10},{x:45,y:25,z:15},{x:48,y:30,z:12},
                {x:50,y:15,z:18},{x:52,y:28,z:14},{x:55,y:22,z:35},{x:58,y:18,z:16}
            ]
        },

        {
          name: 'Inconsistent Performers',
            color: '#00C3C3', //#8DD9D9
            data: [
                {x:40,y:70,z:10},{x:42,y:75,z:12},{x:45,y:65,z:10},{x:48,y:80,z:15},
                {x:50,y:85,z:18},{x:52,y:78,z:12},{x:55,y:90,z:25},{x:58,y:88,z:20}
            ]
        },

        {
          name: 'Laggards',
            color: '#FE0000', //#FF8C8C
            data: [
                {x:10,y:70,z:10},{x:12,y:75,z:12},{x:15,y:80,z:14},{x:18,y:65,z:10},
                {x:20,y:72,z:8},{x:22,y:68,z:9},{x:25,y:78,z:11},{x:28,y:74,z:10}
            ]
        }
    ],
    annotations: [{
        labels: [{
            point: { x: 30, y: 50, xAxis: 0, yAxis: 0 },
            text: 'Avg. point of DQI and Performance',
            backgroundColor: 'rgba(255,255,255,0.7)'
        }]
    }]
});