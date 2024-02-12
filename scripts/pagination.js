document.addEventListener("DOMContentLoaded", function () {
	const itemsPerPage = 3;
	const dataTable = document.getElementById("default-table");
	const paginationContainer = document.getElementById("pagination");

	const rows = document.querySelectorAll("#default-table tr");
	const totalItems = rows.length - 1; // excluding the header row
	let currentPage = 1;

	function showPage(page) {
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		for (let i = 1; i < rows.length; i++) {
			rows[i].style.display =
				i > startIndex && i <= endIndex ? "table-row" : "none";
		}
	}

	function generatePaginationButtons() {
		paginationContainer.innerHTML = "";

		const totalPages = Math.ceil(totalItems / itemsPerPage);

		for (let i = 1; i <= totalPages; i++) {
			const button = document.createElement("p");
			button.textContent = i;
			button.classList.add("default-num");
			button.addEventListener("click", function () {
				currentPage = i;
				showPage(currentPage);
				updatePaginationButtons();
			});

			paginationContainer.appendChild(button);
		}

		updatePaginationButtons();
	}

	function updatePaginationButtons() {
		const buttons = paginationContainer.querySelectorAll(".default-num");
		buttons.forEach((button) => button.classList.remove("active-num"));
		buttons[currentPage - 1].classList.add("active-num");
	}

	showPage(currentPage);
	generatePaginationButtons();
});

// document.addEventListener("DOMContentLoaded", function () {
// 	let itemsPerPage = 3; // Default value
// 	const itemsPerPageSelector = document.getElementById("itemsPerPageSelector");
// 	const dataTable = document.getElementById("default-table");
// 	const paginationContainer = document.getElementById("pagination");

// 	const rows = document.querySelectorAll("#default-table tr");
// 	let totalItems = rows.length - 1; // excluding the header row
// 	let currentPage = 1;

// 	function showPage(page) {
// 		const startIndex = (page - 1) * itemsPerPage;
// 		const endIndex = startIndex + itemsPerPage;

// 		for (let i = 1; i < rows.length; i++) {
// 			rows[i].style.display =
// 				i > startIndex && i <= endIndex ? "table-row" : "none";
// 		}
// 	}

// 	function generatePaginationButtons() {
// 		paginationContainer.innerHTML = "";

// 		const totalPages = Math.ceil(totalItems / itemsPerPage);

// 		for (let i = 1; i <= totalPages; i++) {
// 			const button = document.createElement("p");
// 			button.textContent = i;
// 			button.classList.add("default-num");
// 			button.addEventListener("click", function () {
// 				currentPage = i;
// 				showPage(currentPage);
// 				updatePaginationButtons();
// 			});

// 			paginationContainer.appendChild(button);
// 		}

// 		updatePaginationButtons();
// 	}

// 	function updatePaginationButtons() {
// 		const buttons = paginationContainer.querySelectorAll(".default-num");
// 		buttons.forEach((button) => button.classList.remove("active-num"));
// 		buttons[currentPage - 1].classList.add("active-num");
// 	}

// 	function updateItemsPerPage() {
// 		itemsPerPage = parseInt(itemsPerPageSelector.value, 10);
// 		totalItems = rows.length - 1; // Recalculate total items
// 		currentPage = 1; // Reset current page to 1
// 		showPage(currentPage);
// 		generatePaginationButtons();
// 	}

// 	itemsPerPageSelector.addEventListener("change", updateItemsPerPage);

// 	showPage(currentPage);
// 	generatePaginationButtons();
// });
