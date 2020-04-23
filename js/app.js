var updatingChart = new Chart(document.getElementById('barChartHorizontal'), {
	type: 'horizontalBar',
	data: {
		labels: ['AUT','BEL','FIN','FRA','GBR','NOR','SUI','SWE','USA'],
		datasets: [{
			label: 'Full number',
			backgroundColor: ['#ffd166','#06d6a0','#a5668b','#35a7ff','#ee6c4d','#3a6ea5','#fca311','#7bdff2','#aaf683'],
			data: [280, 13, 434, 152, 79, 457, 285, 433, 653],
		}]
	},
	options: {
		legend: {
			display:false
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutQuad'
		}
	}

});

function addData(chart, label, data, backgroundColor) {
	chart.data.labels.push(label);
	chart.data.datasets[0].data.push(data);
	chart.data.datasets[0].backgroundColor.push(backgroundColor);
	chart.update();   
}

setTimeout(function () {
addData(updatingChart, 'CAN', 625, '#f94144');
}, 3000);


new Chart(document.getElementById('pieChart'), {
	type: 'pie',
	data: {
		labels: ['Gold','Silver','Bronze'],
		datasets: [{
			backgroundColor: ['#eed317','#aeb7b3', '#76520e'],
			data: [315,203,107],
		}]
	},
	options: {
		legend: {
			display:true,
		},

		animation: {
			duration: '2000',
			easing: 'easeOutCirc'
		}

	}

});


new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['1924','1928','1932','1936','1948','1952','1956','1960','1964','1968','1972','1976','1980','1984','1988','1992','1994','1998','2002','2006','2010','2014'],
		datasets: [{
			label: 'Number of medals',
			data: [9,12,20,13,20,17,20,21,7,20,1,3,2,4,6,37,40,49,75,68,91,90],
			fill: false,
			borderColor: '#f94144'
		}]
	},
	options: {
		legend: {
			display:false,
		},
		animation: {
			duration: '2000',
			easing: 'easeInOutExpo'
		}
	}
});



new Chart(document.getElementById('barChartVertical'), {
	type: 'bar',
	data: {
		labels: ['Biathlon', 'Bobsleigh', 'Curling', 'Ice Hockey','Skating','Skiing'],
		datasets: [{
			label: 'Female athletes',
			data: [3,7,25,101,77,26,],
			backgroundColor:'#ff595e',
		},
		{
			label: 'Male athletes',
			data: [0,15,25,250,82,14],
			backgroundColor:'#1982c4',
		}]
	},
	options: {
		legend: {
			display:true,
		},

		animation: {
			duration: '2000',
			easing: 'easeInOutBack'
		}
	}
});

new Chart(document.getElementById('multigraphChart'), {
	type: 'bar',
	data: {
		labels: ['1948','1952','1956','1964','1968','1972','1976','1988','1994','1998','2004','2008','2014'],
		datasets: [{
			label: 'Number of victories',
			data: [20,17,20,7,20,1,3,6,40,49,68,91,90],
			backgroundColor: [
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)',
			'rgb(67,35,113, 0.5)'
			]
		},	

		{
			label: 'Female victories',
			type: 'line',
			fill: false,
			data: [2,2,2,2,2,1,2,4,7,10,33,37,47,44,44],
			borderColor: '#ff595e',
			backgroundColor:'#8e5ea2'

		}]
	},
	options: {
		legend: {
			display:true,
		},

		animation: {
			duration: '2000',
			easing: 'easeInBounce'
		}
	}
});

