const ctx = document.getElementById("lineChart").getContext("2d");

const labels = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "My Dataset",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: "rgba(22, 75, 128,0.1)",
			borderColor: "rgb(22, 75, 128)",
			pointRadius: 5,
			pointHoverRadius: 10,
		},
	],
};

const config = {
	type: "line",
	data: data,
	options: {
		scales: {
			y: {
				gridLines: {
					display: false,
				},
			},
			x: {
				gridLines: {
					display: false,
				},
			},
		},
	},
};

const lineChart = new Chart(ctx, config);
