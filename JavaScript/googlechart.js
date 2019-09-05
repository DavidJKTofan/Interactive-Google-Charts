/* Load the Visualization API and the corechart package */
/* Here goes the data */
    google.charts.load('current', {
  'callback': function () {
    var dataTotal = google.visualization.arrayToDataTable([
      ['Total', 'Major Obstacle', {role: 'annotation'}, 'Minor Obstacle', {role: 'annotation'}, 'No Obstacle', {role: 'annotation'}],
      ['Usability',  27, '27%', 49, '49%', 24, '24%'],
      ['Features and services are not producing enough added value',  29, '29%', 46, '46%', 25, '25%'],
      ['Lack of quality of the technology',  32, '32%', 49, '49%', 20, '20%'],
      ['Maturity of the technology',  33, '33%', 49, '49%', 17, '17%'],
      ['Safety concerns',  34, '34%', 42, '42%', 23, '23%'],
      ['Lack of trust in the technology',  41, '41%', 38, '38%', 21, '21%'],
      ['Privacy concerns',  44, '44%', 36, '36%', 20, '20%'],
      ['Cyber security',  44, '44%', 37, '37%', 18, '18%'],
      ['Additional costs',  54, '54%', 36, '36%', 9, '9%']
    ]);

    var dataMale = google.visualization.arrayToDataTable([
      ['Total', 'Major Obstacle', {role: 'annotation'}, 'Minor Obstacle', {role: 'annotation'}, 'No Obstacle', {role: 'annotation'}],
      ['Usability',  23, '23%', 51, '51%', 26, '26%'],
      ['Features and services are not producing enough added value',  26, '26%', 46, '46%', 27, '27%'],
      ['Lack of quality of the technology',  29, '29%', 50, '50%', 21, '21%'],
      ['Maturity of the technology',  30, '30%', 52, '52%', 18, '18%'],
      ['Safety concerns',  30, '30%', 42, '42%', 28, '28%'],
      ['Lack of trust in the technology',  39, '39%', 38, '38%', 23, '23%'],
      ['Privacy concerns',  39, '39%', 37, '37%', 24, '24%'],
      ['Cyber security',  39, '39%', 39, '39%', 22, '22%'],
      ['Additional costs',  51, '51%', 38, '38%', 11, '11%']
    ]);

    var dataFemale = google.visualization.arrayToDataTable([
      ['Total', 'Major Obstacle', {role: 'annotation'}, 'Minor Obstacle', {role: 'annotation'}, 'No Obstacle', {role: 'annotation'}],
      ['Usability',  31, '31%', 47, '47%', 22, '22%'],
      ['Features and services are not producing enough added value',  32, '32%', 45, '45%', 23, '23%'],
      ['Lack of quality of the technology',  34, '34%', 48, '48%', 18, '18%'],
      ['Maturity of the technology',  36, '36%', 46, '46%', 17, '17%'],
      ['Safety concerns',  39, '39%', 43, '43%', 19, '19%'],
      ['Lack of trust in the technology',  44, '44%', 38, '38%', 18, '18%'],
      ['Privacy concerns',  50, '50%', 34, '34%', 16, '16%'],
      ['Cyber security',  50, '50%', 35, '35%', 15, '15%'],
      ['Additional costs',  58, '58%', 34, '34%', 8, '8%']
    ]);

/* Customizing the chart */
    var options = {
      title: 'Connected Cars Study',
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
                    fontSize: 12, 
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
            fontSize: 12, 
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
                     fontSize: 11,
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
