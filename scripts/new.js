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
        unit.src ="rsc/icons8-chevron-down-30.png"
			}
		});
	});

	
});
