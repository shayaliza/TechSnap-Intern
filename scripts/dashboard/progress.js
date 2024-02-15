const ctx4 = document.getElementById("progressChart").getContext("2d");

const labels4 = ["completed", "pending"];
const data4 = {
	labels: labels4,
	datasets: [
		{
			data: [60, 40], // Update data values here
			backgroundColor: ["rgba(22, 75, 128, 1)", "rgba(212, 212, 212, 1)"],
			hoverBackgroundColor: [
				"rgba(22, 75, 128, 0.8)",
				"rgba(212, 212, 212, 0.8)",
			],
		},
	],
};

const config4 = {
	type: "doughnut",
	data: data4,
	options: {
		// Add any additional options here, e.g., legend, tooltips
	},
};

const progressChart = new Chart(ctx4, config4);
