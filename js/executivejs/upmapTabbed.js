document.addEventListener('DOMContentLoaded', async function () {
  function waitForHighcharts() {
    return new Promise((resolve) => {
      let attempts = 0;
      function check() {
        attempts++;
        if (typeof Highcharts !== 'undefined' && typeof Highcharts.map === 'function') {
          console.log('✅ Highcharts mapChart ready');
          resolve();
        } else if (attempts < 50) {
          setTimeout(check, 100);
        } else {
          throw new Error('Highcharts map module failed to load');
        }
      }
      check();
    });
  }

  try {
    await waitForHighcharts();
    // 1. Fetch India district GeoJSON
    const mapUrl = 'https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson';
    console.log('📡 Fetching GeoJSON...');

    const response = await fetch(mapUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

    const fullIndiaTopology = await response.json();
    console.log('📊 Loaded districts:', fullIndiaTopology.features.length);

    // 2. Filter to ONLY Uttar Pradesh districts
    const upFeatures = fullIndiaTopology.features.filter((feature) => feature.properties.NAME_1 === 'Uttar Pradesh');

    if (upFeatures.length === 0) {
      throw new Error('Uttar Pradesh not found in dataset');
    }

    const upTopology = {
      type: 'FeatureCollection',
      features: upFeatures,
    };
    console.log('🗺️ UP districts found:', upFeatures.length);

    // 3. Generate mock ranking data (1-75)
    const data = upTopology.features.map((feature) => {
      return [
        feature.properties.NAME_2, // District name
        Math.floor(Math.random() * 75) + 1, // Random rank 1-75
      ];
    });

    // 4. Create Highcharts map
    console.log('🎨 Creating map...');
    debugger;
    const chart = new Highcharts.mapChart('mapViewChart', {
      chart: {
        map: upTopology,
        backgroundColor: 'transparent',
      },
      title: {
        text: 'Uttar Pradesh District Rankings',
        style: { color: '#333', fontSize: '18px' },
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: { align: 'left' },
        enableMouseWheelZoom: false,
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.NAME_2}</b><br/>' + 'Rank: <b>{point.value}</b><br/>' + 'Population: {point.properties.NAME_2_POP}',
      },
      colorAxis: {
        min: 1,
        max: 75,
        stops: [
          [0, '#00B050'], // Dark Green (Top 10%)
          [0.2, '#92D050'], // Light Green
          [0.4, '#00B0F0'], // Blue
          [0.6, '#9DC3E6'], // Light Blue
          [0.8, '#FFFF00'], // Yellow
          [1, '#FF0000'], // Red (Bottom)
        ],
      },
      series: [
        {
          data: data,
          keys: ['NAME_2', 'value'],
          joinBy: 'NAME_2',
          name: 'District Rank',
          borderColor: '#ffffff',
          borderWidth: 1,
          states: {
            hover: {
              color: '#FFE6CC',
              brightness: 0.1,
            },
          },

          point: {
            events: {
              click: function () {
                const name = this.properties.NAME_2;
                const rank = this.value;
                const population = this.properties.NAME_2_POP || 'N/A';

                const content = `
                        📍 <strong>${name}</strong><br>
                        🏆 Rank: ${rank}<br>
                        👥 Est. Population: ${population}
                      `;

                document.getElementById('modalContent').innerHTML = content;

                const modal = new bootstrap.Modal(document.getElementById('mapModal'));
                modal.show();
              },
            },
          },
          dataLabels: {
            enabled: false,
            format: '{point.NAME_2}',
          },
        },
      ],
    });

    console.log('Total UP districts:', upFeatures.length);
    console.log('Sample data:', data.slice(0, 5));

    // 5. Button handlers (if buttons exist)
    const btns = document.querySelectorAll('#view-toggles .btn');
    btns.forEach((btn) => {
      btn.addEventListener('click', function () {
        btns.forEach((b) => {
          b.classList.remove('btn-map-view');
          b.classList.add('btn-toggle-light');
        });
        this.classList.remove('btn-toggle-light');
        this.classList.add('btn-map-view');
      });
    });

    // 6. Expand button (if exists)
    const expandBtn = document.getElementById('expand-btn');
    if (expandBtn) {
      expandBtn.addEventListener('click', function () {
        if (chart.fullscreen) {
          chart.fullscreen.toggle();
        } else {
          alert('Fullscreen requires Highcharts Fullscreen module');
        }
      });
    }
  } catch (error) {
    console.error('Error loading map:', error);
    const container = document.getElementById('mapViewChart') || document.getElementById('up-map-container');
    if (container) {
      container.innerHTML = `
                <div class="alert alert-danger d-flex align-items-center justify-content-center h-100" style="min-height: 400px;" role="alert">
                    <div class="text-center">
                        <h5>Map Loading Failed</h5>
                        <p><strong>${error.message}</strong></p>
                        <small class="text-muted">
                            ${error.message.includes('Highcharts') ? 'Check script loading order' : error.message.includes('fetch') ? 'Network/GeoJSON issue' : 'Unknown error'}
                        </small>
                        <hr>
                        <p>Console: F12 → Console for details</p>
                    </div>
                </div>`;
    }
  }
});
