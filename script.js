google.charts.load('current', {
    'packages': ['gantt']
  });
  google.charts.setOnLoadCallback(drawChart);

  function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }

  function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([

      ['scoping', 'Scoping', 'planning',
        new Date(2017, 0, 3), new Date(2017, 0, 8), null, 0, null
      ],
      ['estimating', 'Estimating', 'planning',
        new Date(2017, 0, 8), new Date(2017, 0, 10), null, 0, 'scoping'
      ],
      ['quote', 'Quote & Project Plan', 'planning',
        new Date(2017, 0, 10), new Date(2017, 0, 13), null, 0, 'scoping, estimating'
      ],
      ['spec', 'Technical Specification', 'planning',
        new Date(2017, 0, 13), new Date(2017, 0, 15), null, 0, 'quote'
      ],

      ['ux', 'UX', 'design',
        new Date(2017, 0, 13), new Date(2017, 0, 16), null, 0, 'quote'
      ],
      ['design', 'Design', 'design',
        new Date(2017, 0, 16), new Date(2017, 0, 26), null, 0, 'ux'
      ],

      ['imp', 'Implementation', 'dev',
        new Date(2017, 0, 22), new Date(2017, 1, 1), null, 0, 'spec,design'
      ],
      ['qa', 'QA / Testing', 'dev',
        new Date(2017, 1, 1), new Date(2017, 1, 4), null, 0, 'imp'
      ],

      ['deploy', 'Deployment', 'deploy',
        new Date(2017, 1, 4), new Date(2017, 1, 5), null, 0, 'qa'
      ],
      ['cont', 'Content', 'deploy',
        new Date(2017, 1, 5), new Date(2017, 1, 7), null, 0, 'deploy'
      ],
    ]);

    var options = {
      height: 500
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
  }
