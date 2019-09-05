/* Load the Visualization API and the corechart package */
/* Here goes the data */
    google.charts.load('current', {
  'callback': function () {
    var dataTotal = google.visualization.arrayToDataTable([
      ['Total', 'Legend 1', {role: 'annotation'}, 'Legend 2', {role: 'annotation'}, 'Legend 3', {role: 'annotation'}],
      ['Data 1',  27, '27%', 49, '49%', 24, '24%'],
      ['Data 2',  29, '29%', 21, '21%', 50, '50%'],
      ['Data 3',  32, '32%', 49, '49%', 20, '20%'],
      ['Data 4',  33, '33%', 49, '49%', 17, '17%'],
      ['Data 5',  34, '34%', 42, '42%', 23, '23%'],
    ]);

    var dataMale = google.visualization.arrayToDataTable([
      ['Total', 'Legend 1', {role: 'annotation'}, 'Legend 2', {role: 'annotation'}, 'Legend 3', {role: 'annotation'}],
      ['Data 1',  23, '23%', 51, '51%', 26, '26%'],
      ['Data 2',  26, '26%', 46, '46%', 27, '27%'],
      ['Data 3',  29, '29%', 50, '50%', 21, '21%'],
      ['Data 4',  30, '30%', 52, '52%', 18, '18%'],
      ['Data 5',  30, '30%', 49, '49%', 21, '21%'],
    ]);

    var dataFemale = google.visualization.arrayToDataTable([
      ['Total', 'Legend 1', {role: 'annotation'}, 'Legend 2', {role: 'annotation'}, 'Legend 3', {role: 'annotation'}],
      ['Data 1',  31, '31%', 47, '47%', 22, '22%'],
      ['Data 2',  32, '32%', 45, '45%', 23, '23%'],
      ['Data 3',  34, '34%', 48, '48%', 18, '18%'],
      ['Data 4',  36, '36%', 46, '46%', 17, '17%'],
      ['Data 5',  39, '39%', 43, '43%', 19, '19%'],
    ]);

/* Customizing the chart */
    var options = {
      title: 'Horizontal Bar Chart Sample',
      titleTextStyle: {
        color: '#000000',
        fontName: 'Montserrat',
        fontSize: 18,
        bold: true,
        italic: false
       },  // CSS of the Title text
      height: '100%',
      width: '100%',
      bar: {groupWidth: '50%'},  // Bar width
      legend: {
          position:"bottom", 
          alignment:"center", 
          textStyle: {
                    fontSize: 14, 
                    fontName: 'Montserrat'}
          },  // Legend styling
      tooltip: {
		"isHtml":"true" 
	},  // CSS styling affects HTML tooltips
      chartArea: {
          height: '100%',
          width: '100%',
          top: 80,
          left: 180,
          bottom: 80,
          right: 30
        },  // Chart Area size
      annotations: {
          alwaysOutside: false,
          textStyle: {
            fontName: 'Montserrat',
            fontSize: 14, 
            bold:true,
            auraColor: '#eee',
            color: '#FFFFFF'
          }},   // Customize the annotations inside the bars
      animation:{
        startup: true,
        duration: 800,
        easing: 'out',
      },  // Animation configuration
      isStacked: 'percent',
      hAxis: {
                  minValue: 0,
                  maxValue: 1,
                  ticks: [0, .2, .4, .6, .8, 1],
                  textStyle: {
                     color: '#000000',
                     fontSize: 16,
                     fontName: 'Montserrat',
                     bold: true,
                  },
               }, // Horizontal Axis configuration
      vAxis: {
                  textStyle: {
                     fontName: 'Montserrat',
                     color: '#000000',
                     fontSize: 15,
                     bold: true
                  },
               },  // Vertical Axis configuration
               height:550,	  
               colors:['#003E7D', '#F46B1B', '#A7C246']  // Bar Colors 
            };

/* Event Listener */
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(dataTotal, options);

    document.getElementById('total').addEventListener('click', function () {
      chart.draw(dataTotal, options);
    }, false);

    document.getElementById('male').addEventListener('click', function () {
      chart.draw(dataMale, options);
    }, false);

    document.getElementById('female').addEventListener('click', function () {
      chart.draw(dataFemale, options);
    }, false);
  },
  'packages':['corechart']
});
