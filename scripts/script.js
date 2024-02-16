document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.querySelector(".overlay");

	var arrows = document.querySelectorAll(".arrow");
	var headings = document.querySelectorAll(".panel-heading");
	var detailsList = document.querySelectorAll(".details");

	var headingsArray = Array.from(headings);

	var eventListeners = headingsArray.map(function (heading, index) {
		return function () {
			var arrow = arrows[index];
			var details = detailsList[index];

			if (arrow.className === "down") {
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

	var menu = document.getElementById("menu");
	var panel = document.getElementsByClassName("side-panel-container")[0];
	var close = document.getElementById("close");
	var body = document.getElementsByClassName("body")[0];
	var navi = document.getElementsByClassName("navigation")[0];

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

	var noti = document.getElementsByClassName("noti-icon")[0];
	var noti_list = document.getElementsByClassName(
		"notification-list-container"
	)[0];

	var profile = document.getElementsByClassName("image")[0];
	var profile_close = document.getElementsByClassName("profile-close")[0];
	var prof_list = document.getElementsByClassName("profile-container")[0];
	var noti_close = document.getElementsByClassName("notification-close")[0];

	noti.addEventListener("click", () => {
		noti_list.className = "notification-list-container noti-display";
		body.style.filter = "blur(10px)";
		body.style.overflow = "hidden";
		navi.style.filter = "blur(10px)";
		panel.style.pointerEvents = "none";
		panel.style.filter = "blur(10px)";
		overlay.style.display = "block";
	});

	noti_close.addEventListener("click", () => {
		noti_list.className = "notification-list-container noti-notdisplay";
		body.style.filter = "none";
		navi.style.filter = "none";
		panel.style.pointerEvents = "auto";
		panel.style.filter = "none";
		overlay.style.display = "none";
	});

	profile.addEventListener("click", () => {
		prof_list.className = "profile-container prof-display";
		body.style.filter = "blur(10px)";
		body.style.overflow = "hidden";
		navi.style.filter = "blur(10px)";
		panel.style.pointerEvents = "none";
		panel.style.filter = "blur(10px)";
		overlay.style.display = "block";
	});

	profile_close.addEventListener("click", () => {
		prof_list.className = "profile-container prof-notdisplay";
		body.style.filter = "none";
		navi.style.filter = "none";
		panel.style.pointerEvents = "auto";
		panel.style.filter = "none";
		overlay.style.display = "none";
	});
});
