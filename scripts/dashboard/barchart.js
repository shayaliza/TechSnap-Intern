const ctx2 = document.getElementById("barChart").getContext("2d");

const labels1 = ["1", "2", "3", "4"];
const data1 = {
	labels: labels1,
	datasets: [
		{
			label: "My Dataset",
			data: [50, 75, 38, 62], // Update data values here
			backgroundColor: [
				"rgba(255,99,132,1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 205, 86, 1)",
				"rgba(75, 192, 192, 1)",
			],
			borderColor: [
				"rgba(255,99,132,1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 205, 86, 1)",
				"rgba(75, 192, 192, 1)",
			],
			borderWidth: 1,
		},
	],
};

const config2 = {
	type: "bar",
	data: data1,
};

const barChart = new Chart(ctx2, config2);
