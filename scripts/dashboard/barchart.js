const ctx2 = document.getElementById("barChart").getContext("2d");

const labels1 = ["1", "2", "3", "4", "5", "6", "7", "8"];
const data1 = {
	labels: labels1,
	datasets: [
		{
			label: "My Dataset",
			data: [50, 75, 38, 62, 100, 50, 34, 52], // Update data values here
			backgroundColor: [
				"rgba(22, 75, 128,1)",
				
			],
			borderColor: [
				"rgba(22, 75, 128,1)",
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
