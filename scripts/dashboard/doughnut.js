const ctx3 = document.getElementById("doughnutChart").getContext("2d");

const labels3 = ["1", "2", "3"];
const data3 = {
	labels: labels3,
	datasets: [
		{
			data: [50, 25, 25], // Update data values here
			backgroundColor: [
				"rgba(22, 75, 128, 1)",
				"rgba(181, 42, 24, 1)",
				"rgba(59, 138, 68, 1)",
			],
			hoverBackgroundColor: [
				"rgba(22, 75, 128, 0.8)",
				"rgba(181, 42, 24, 0.8)",
				"rgba(59, 138, 68, 0.8)",
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
