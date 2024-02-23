// document.addEventListener("DOMContentLoaded", function () {
// 	const unitBtns = document.querySelectorAll(".unit-show-img");
// 	const unit_content = document.querySelectorAll(".unit-content");

// 	Array.from(unitBtns).forEach((unit, index) => {
// 		unit.addEventListener("click", (e) => {
// 			if (unit.className === "down") {
// 				unit_content[index].style.display = "none";
// 				unit.className = "up";
// 				unit.style.content = "url('rsc/icons8-chevron-up-30.png')";
// 			} else {
// 				unit_content[index].style.display = "none";
// 				unit.className = "down";
// 				unit.style.content = "url('rsc/icons8-chevron-down-30.png')";
// 			}
// 		});
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
	const unitBtns = document.querySelectorAll(".unit-show-img");
	const unit_content = document.querySelectorAll(".unit-content");

	Array.from(unitBtns).forEach((unit, index) => {
		unit.addEventListener("click", (e) => {
			if (unit.classList.contains("down")) {
				unit_content[index].style.display = "none";
				unit.classList.remove("down");
				unit.classList.add("up");
				unit.src = "rsc/icons8-chevron-up-30.png";
			} else {
				unit_content[index].style.display = "block";
				unit.classList.remove("up");
				unit.classList.add("down");
				unit.src = "rsc/icons8-chevron-down-30.png";
			}
		});
	});

	// ==== unit option popup =====

	const unitPopups = document.querySelectorAll(".unit-popup");
	const popup = document.getElementById("unitpopupoption");

	unitPopups.forEach((unitPop, index) => {
		unitPop.addEventListener("click", function (event) {
			popup.style.display = "block";
			popup.style.left = `${event.clientX}px`;
			popup.style.top = `${event.clientY}px`;
			event.stopPropagation(); // Stop the click event from propagating to the document
		});

		document.addEventListener("click", function (event) {
			if (!unitPop.contains(event.target) && !popup.contains(event.target)) {
				popup.style.display = "none";
			}
		});
	});
});
