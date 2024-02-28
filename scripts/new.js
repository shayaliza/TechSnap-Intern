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
	let popup = document.getElementById("unitpopupoption");

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

// ============    make draft popup    ============

let menu = document.getElementById("menu");
let panel = document.getElementsByClassName("side-panel-container")[0];
let body = document.getElementsByClassName("body")[0];
let navi = document.getElementsByClassName("navigation")[0];

const draftBtn = document.querySelector("#draft");
let draftClose = document.querySelector("#makeDraftClose");
let makeDraftPopup = document.querySelector("#makeDraft");

draftBtn.addEventListener("click", (e) => {
	let popup = document.getElementById("unitpopupoption");

	makeDraftPopup.style.display = "block";
	popup.style.display = "none";
	panel.style.filter = "blur(10px)";
	panel.style.zIndex = "1000";
	body.style.filter = "blur(10px)";
	navi.style.filter = "blur(10px)";
	overlay.style.display = "block";
});

draftClose.addEventListener("click", (e) => {
	makeDraftPopup.style.display = "none";

	panel.style.filter = "none";
	panel.style.zIndex = "1";
	body.style.filter = "none";
	navi.style.filter = "none";
	overlay.style.display = "none";
});


// ============    edit details popup    ============



const editDetailsBtn = document.querySelector("#edit-details");
let editDetailsClose = document.querySelector("#editDetailsClose");
let editDetails = document.querySelector("#editDetails");

editDetailsBtn.addEventListener("click", (e) => {
	let popup = document.getElementById("unitpopupoption");

	editDetails.style.display = "block";
	popup.style.display = "none";
	panel.style.filter = "blur(10px)";
	panel.style.zIndex = "1000";
	body.style.filter = "blur(10px)";
	navi.style.filter = "blur(10px)";
	overlay.style.display = "block";
});

editDetailsClose.addEventListener("click", (e) => {
	editDetails.style.display = "none";

	panel.style.filter = "none";
	panel.style.zIndex = "1";
	body.style.filter = "none";
	navi.style.filter = "none";
	overlay.style.display = "none";
});

// ============    add lesson popup    ============



const addLessonsBtn = document.querySelector("#add-lesson");
let addLessonsClose = document.querySelector("#addLessonsClose");
let addLessons = document.querySelector("#addLessons");

addLessonsBtn.addEventListener("click", (e) => {
	let popup = document.getElementById("unitpopupoption");

	addLessons.style.display = "block";
	popup.style.display = "none";
	panel.style.filter = "blur(10px)";
	panel.style.zIndex = "1000";
	body.style.filter = "blur(10px)";
	navi.style.filter = "blur(10px)";
	overlay.style.display = "block";
});

addLessonsClose.addEventListener("click", (e) => {
	addLessons.style.display = "none";

	panel.style.filter = "none";
	panel.style.zIndex = "1";
	body.style.filter = "none";
	navi.style.filter = "none";
	overlay.style.display = "none";
});


// ============    archive popup    ============



const archiveItemBtn = document.querySelector("#archive-option");
let archiveItemClose = document.querySelector("#archiveItemClose");
let archiveItem = document.querySelector("#archiveItem");

archiveItemBtn.addEventListener("click", (e) => {
	let popup = document.getElementById("unitpopupoption");

	archiveItem.style.display = "block";
	popup.style.display = "none";
	panel.style.filter = "blur(10px)";
	panel.style.zIndex = "1000";
	body.style.filter = "blur(10px)";
	navi.style.filter = "blur(10px)";
	overlay.style.display = "block";
});

archiveItemClose.addEventListener("click", (e) => {
	archiveItem.style.display = "none";

	panel.style.filter = "none";
	panel.style.zIndex = "1";
	body.style.filter = "none";
	navi.style.filter = "none";
	overlay.style.display = "none";
});