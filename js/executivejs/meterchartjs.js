Highcharts.chart('meterView1', {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: true,
    // height: '50%',
  },

  title: {
    text: '43% in Laggards',
        verticalAlign: 'bottom',
        style: {
          fontSize: '14px',
          fontWeight: '600',
        },
  },

  pane: {
    startAngle: -90,
    endAngle: 89.99,
    background: null,
    center: ['50%', '100%'],
    size: '160%',
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  // the value axis
  yAxis: {
    min: 0,
    max: 60,
    tickPixelInterval: 32,
    tickPosition: 'inside',
    tickColor: 'var(--highcharts-background-color, #FFFFFF)',
    tickLength: 8,
    tickWidth: 1,
    minorTickInterval: null,
    labels: {
      distance: 15,
      style: {
        fontSize: '12px',
        fontWeight: '600',
      },
    },
    lineWidth: 0,
     plotBands: [
      {
        from: 0,
        to: 15,
        color: 'rgba(254, 0, 0,1)', //  #FE0000
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 15,
        to: 30,
        color: 'rgba(0, 195, 195,0.1)', // #00c3c3
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 30,
        to: 45,
        color: 'rgba(129, 129, 255, 0.1)', // #8181FF
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 45,
        to: 60,
        color: 'rgba(50, 200, 106, 0.1)', // #32C86A
        thickness: 40,
        borderRadius: '0%',
      },
    ],
  },

  series: [
    {
      name: 'Speed',
      data: [5],
      tooltip: {
        valueSuffix: ' Archiver',
      },
      dataLabels: {
        enabled: false,
        format: '{y} ',
        borderWidth: 0,
        color: (Highcharts.defaultOptions.title && Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || '#333333',
        style: {
          fontSize: '16px',
        },
      },
      dial: {
        radius: '40%',
        backgroundColor: 'gray',
        baseWidth: 16,
        baseLength: '0%',
        rearLength: '0%',
      },
      pivot: {
        backgroundColor: 'gray',
        radius: 6,
      },
    },
  ],
});
// ==================================================================================
// ---------------------------------  meterView2 ------------------------------------
// ==================================================================================

Highcharts.chart('meterView2', {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: true,
    // height: '50%',
  },

  title: {
    text: '43% in Laggards',
        verticalAlign: 'bottom',
        style: {
          fontSize: '14px',
          fontWeight: '600',
        },
  },

  pane: {
    startAngle: -90,
    endAngle: 89.99,
    background: null,
    center: ['50%', '100%'],
    size: '160%',
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  // the value axis
  yAxis: {
    min: 0,
    max: 60,
    tickPixelInterval: 32,
    tickPosition: 'inside',
    tickColor: 'var(--highcharts-background-color, #FFFFFF)',
    tickLength: 8,
    tickWidth: 1,
    minorTickInterval: null,
    labels: {
      distance: 15,
      style: {
        fontSize: '12px',
        fontWeight: '600',
      },
    },
    lineWidth: 0,
    plotBands: [
      {
        from: 0,
        to: 15,
        color: 'rgba(254, 0, 0,0.1)', //  #FE0000
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 15,
        to: 30,
        color: 'rgba(0, 195, 195,1)', // #00c3c3
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 30,
        to: 45,
        color: 'rgba(129, 129, 255, 0.1)', // #8181FF
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 45,
        to: 60,
        color: 'rgba(50, 200, 106, 0.1)', // #32C86A
        thickness: 40,
        borderRadius: '0%',
      },
    ],
  },

  series: [
    {
      name: 'Speed',
      data: [22],
      tooltip: {
        valueSuffix: ' Archiver',
      },
      dataLabels: {
        enabled: false,
        format: '{y} ',
        borderWidth: 0,
        color: (Highcharts.defaultOptions.title && Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || '#333333',
        style: {
          fontSize: '16px',
        },
      },
      dial: {
        radius: '40%',
        backgroundColor: 'gray',
        baseWidth: 16,
        baseLength: '0%',
        rearLength: '0%',
      },
      pivot: {
        backgroundColor: 'gray',
        radius: 6,
      },
    },
  ],
});

// ==================================================================================
// ---------------------------------  meterView3 ------------------------------------
// ==================================================================================

Highcharts.chart('meterView3', {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: true,
    // height: '50%',
  },

  title: {
    text: '43% in Laggards',
        verticalAlign: 'bottom',
        style: {
          fontSize: '14px',
          fontWeight: '600',
        },
  },

  pane: {
    startAngle: -90,
    endAngle: 89.99,
    background: null,
    center: ['50%', '100%'],
    size: '160%',
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  // the value axis
  yAxis: {
    min: 0,
    max: 60,
    tickPixelInterval: 32,
    tickPosition: 'inside',
    tickColor: 'var(--highcharts-background-color, #FFFFFF)',
    tickLength: 8,
    tickWidth: 1,
    minorTickInterval: null,
    labels: {
      distance: 15,
      style: {
        fontSize: '12px',
        fontWeight: '600',
      },
    },
    lineWidth: 0,
   plotBands: [
      {
        from: 0,
        to: 15,
        color: 'rgba(254, 0, 0,0.1)', //  #FE0000
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 15,
        to: 30,
        color: 'rgba(0, 195, 195, 0.1)', // #00c3c3
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 30,
        to: 45,
        color: 'rgba(129, 129, 255, 1)', // #8181FF
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 45,
        to: 60,
        color: 'rgba(50, 200, 106, 0.1)', // #32C86A
        thickness: 40,
        borderRadius: '0%',
      },
    ],
  },

  series: [
    {
      name: 'Speed',
      data: [40],
      tooltip: {
        valueSuffix: ' Archiver',
      },
      dataLabels: {
        enabled: false,
        format: '{y} ',
        borderWidth: 0,
        color: (Highcharts.defaultOptions.title && Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || '#333333',
        style: {
          fontSize: '16px',
        },
      },
      dial: {
        radius: '40%',
        backgroundColor: 'gray',
        baseWidth: 16,
        baseLength: '0%',
        rearLength: '0%',
      },
      pivot: {
        backgroundColor: 'gray',
        radius: 6,
      },
    },
  ],
});
// ==================================================================================
// ---------------------------------  meterView4 ------------------------------------
// ==================================================================================

Highcharts.chart('meterView4', {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: true,
    // height: '50%',
  },

  title: {
    text: '43% in Laggards',
        verticalAlign: 'bottom',
        style: {
          fontSize: '14px',
          fontWeight: '600',
        },
  },

  pane: {
    startAngle: -90,
    endAngle: 89.99,
    background: null,
    center: ['50%', '100%'],
    size: '160%',
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  // the value axis
  yAxis: {
    min: 0,
    max: 60,
    tickPixelInterval: 32,
    tickPosition: 'inside',
    tickColor: 'var(--highcharts-background-color, #FFFFFF)',
    tickLength: 8,
    tickWidth: 1,
    minorTickInterval: null,
    labels: {
      distance: 15,
      style: {
        fontSize: '12px',
        fontWeight: '600',
      },
    },
    lineWidth: 0,
   plotBands: [
      {
        from: 0,
        to: 15,
        color: 'rgba(254, 0, 0,0.1)', //  #FE0000
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 15,
        to: 30,
        color: 'rgba(0, 195, 195, 0.1)', // #00c3c3
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 30,
        to: 45,
        color: 'rgba(129, 129, 255, 0.1)', // #8181FF
        thickness: 40,
        borderRadius: '0%',
      },
      {
        from: 45,
        to: 60,
        color: 'rgba(50, 200, 106, 1)', // #32C86A
        thickness: 40,
        borderRadius: '0%',
      },
    ],
  },

  series: [
    {
      name: 'Speed',
      data: [55],
      tooltip: {
        valueSuffix: ' Archiver',
      },
      dataLabels: {
        enabled: false,
        format: '{y} ',
        borderWidth: 0,
        color: (Highcharts.defaultOptions.title && Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || '#333333',
        style: {
          fontSize: '16px',
        },
      },
      dial: {
        radius: '40%',
        backgroundColor: 'gray',
        baseWidth: 16,
        baseLength: '0%',
        rearLength: '0%',
      },
      pivot: {
        backgroundColor: 'gray',
        radius: 6,
      },
    },
  ],
});
