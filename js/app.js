new Chart(document.getElementById('barChartHorizontal'), {
	type: 'horizontalBar',
	data: {
		labels: ['AUT','BEL','CAN','FIN','FRA','GBR','NOR','SUI','SWE','USA'],
		datasets: [{
			label: 'Full number',
			backgroundColor: ['#3e95cd','#3e95cd','#3e95cd','#3e95cd','#3e95cd','#3e95cd','#3e95cd','#3e95cd','#3e95cd','#3e95cd'],
			data: [280, 13, 625, 434, 152, 79, 457, 285, 433, 653],
		}]
	},
	options: {
		legend: {
			display:false
		}

	}

});



new Chart(document.getElementById('pieChart'), {
	type: 'pie',
	data: {
		labels: ['Gold','Silver','Bronze'],
		datasets: [{
			backgroundColor: ['#3e95cd','#8e5ea2', '#e8c3b9'],
			data: [315,203,107],
		}]
	},
	options: {
		legend: {
			display:true,
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
			borderColor: '#3e95cd'
		}]
	},
	options: {
		legend: {
			display:false,
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
			backgroundColor:'#3e95cd',
		},
		{
			label: 'Male athletes',
			data: [0,15,25,250,82,14],
			backgroundColor:'#8e5ea2',
		}]
	},
	options: {
		legend: {
			display:true,
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
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			'rgb(255,192,203, 0.2)',
			]
		},	

		{
			label: 'Female victories',
			type: 'line',
			fill: false,
			data: [2,2,2,2,2,1,2,4,7,10,33,37,47,44,44],
			borderColor: '#3e95cd',
			backgroundColor:'#8e5ea2'

		}]
	},
	options: {
		legend: {
			display:true,
		}
	}
});

