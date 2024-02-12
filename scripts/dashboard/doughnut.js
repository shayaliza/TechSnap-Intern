const ctx3 = document.getElementById("doughnutChart").getContext("2d");

const labels3 = ["1", "2", "3"];
const data3 = {
	labels: labels3,
	datasets: [
		{
			data: [50, 25, 25], // Update data values here
			backgroundColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 205, 86, 1)",
			],
			hoverBackgroundColor: [
				"rgba(255, 99, 132, 0.8)",
				"rgba(54, 162, 235, 0.8)",
				"rgba(255, 205, 86, 0.8)",
			],
		},
	],
};

const config3 = {
	type: "doughnut",
	data: data3,
	options: {
		// Add any additional options here, e.g., legend, tooltips
	},
};

const doughnutChart = new Chart(ctx3, config3);
