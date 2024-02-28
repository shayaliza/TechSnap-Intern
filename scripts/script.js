document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.querySelector(".overlay");

	let arrows = document.querySelectorAll(".arrow");
	let headings = document.querySelectorAll(".panel-heading");
	let detailsList = document.querySelectorAll(".details");

	let headingsArray = Array.from(headings);

	let eventListeners = headingsArray.map(function (heading, index) {
		return function () {
			let arrow = arrows[index];
			let details = detailsList[index];

			if (arrow.classList.contains("down")) {
				arrow.className = "up";
				details.style.display = "none";
				arrow.style.content = "url('rsc/icons8-chevron-up-30.png')";
			} else {
				arrow.className = "down";
				details.style.display = "block";
				arrow.style.content = "url('rsc/icons8-chevron-down-30.png')";
			}
		};
	});

	// Attach the event listeners to the headings
	eventListeners.forEach(function (listener, index) {
		headingsArray[index].addEventListener("click", listener);
	});

	let menu = document.getElementById("menu");
	let panel = document.getElementsByClassName("side-panel-container")[0];
	let close = document.getElementById("close");
	let body = document.getElementsByClassName("body")[0];
	let navi = document.getElementsByClassName("navigation")[0];

	menu.addEventListener("click", () => {
		panel.style.display = "block";
		panel.style.zIndex = "1000";
		body.style.filter = "blur(10px)";
		navi.style.filter = "blur(10px)";
		// document.body.style.overflow = "hidden";
		overlay.style.display = "block";
	});

	close.addEventListener("click", () => {
		panel.style.display = "none";
		panel.style.zIndex = "1";
		body.style.filter = "none";
		navi.style.filter = "none";
		// document.body.style.overflow = "scroll";
		overlay.style.display = "none";
	});

	let noti = document.getElementsByClassName("noti-icon")[0];
	let noti_list = document.getElementsByClassName(
		"notification-list-container"
	)[0];

	let profile = document.getElementsByClassName("image")[0];
	let profile_close = document.getElementsByClassName("profile-close")[0];
	let prof_list = document.getElementsByClassName("profile-container")[0];
	let noti_close = document.getElementsByClassName("notification-close")[0];
	let bodyContainer = document.querySelector(".body");

	noti.addEventListener("click", () => {
		noti_list.className = "notification-list-container noti-display";
		bodyContainer.style.filter = "blur(10px)";
		bodyContainer.style.overflow = "hidden";
		sidebar.style.filter = "blur(10px)";
		panel.style.pointerEvents = "none";
		panel.style.filter = "blur(10px)";
		overlay.style.display = "block";
	});

	noti_close.addEventListener("click", () => {
		noti_list.className = "notification-list-container noti-notdisplay";
		bodyContainer.style.filter = "none";
		sidebar.style.filter = "none";
		panel.style.pointerEvents = "auto";
		panel.style.filter = "none";
		overlay.style.display = "none";
	});

	profile.addEventListener("click", () => {
		prof_list.className = "profile-container prof-display";
		bodyContainer.style.filter = "blur(10px)";
		bodyContainer.style.overflow = "hidden";
		sidebar.style.filter = "blur(10px)";
		panel.style.pointerEvents = "none";
		panel.style.filter = "blur(10px)";
		overlay.style.display = "block";
	});

	profile_close.addEventListener("click", () => {
		prof_list.className = "profile-container prof-notdisplay";
		bodyContainer.style.filter = "none";
		sidebar.style.filter = "none";
		panel.style.pointerEvents = "auto";
		panel.style.filter = "none";
		overlay.style.display = "none";
	});
});
