document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.getElementById("overlay");

	var body = document.getElementsByClassName("body")[0];
	var navi = document.getElementsByClassName("navigation")[0];
	var panel = document.getElementsByClassName("side-panel-container")[0];

	// ============== announcement popup =================

	const announcementModal = document.getElementById("announcementModal");
	const openPopupBtn = document.getElementById("openAnnouncementPopup");
	const closeModalBtn = document.getElementById("closeAnnouncementPopup");
	const announcementHeadingInput = document.getElementById(
		"announcementHeading"
	);
	const announcementDescriptionTextarea = document.getElementById(
		"announcementDescription"
	);

	// Function to open the modal
	function openAnouncementModal() {
		announcementModal.style.display = "block";
		overlay.style.display = "block";
		body.style.filter = "blur(10px)";
		navi.style.filter = "blur(10px)";
		panel.style.filter = "blur(10px)";
	}

	// Function to close the modal
	function closeAnnouncementModal() {
		announcementModal.style.display = "none";
		overlay.style.display = "none";
		body.style.filter = "none";
		navi.style.filter = "none";
		panel.style.filter = "none";
	}

	// Event listener to open the modal when the button is clicked
	openPopupBtn.addEventListener("click", openAnouncementModal);

	// Event listener to close the modal when the close button is clicked
	closeModalBtn.addEventListener("click", closeAnnouncementModal);

	announcementHeadingInput.defaultValue = "Announcement";
	announcementDescriptionTextarea.defaultValue =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum eaque sequi, quod quam earum a cum maiores iusto facere. ";

	//================link popup =============

	const linkModal = document.getElementById("linkModal");
	const addLinkBtn = document.getElementById("addLinkBtn");
	const closeLinkModalBtn = document.getElementById("closeLinkModal");

	// Function to open the modal
	function openLinkModal() {
		linkModal.style.display = "block";
		overlay.style.display = "block";
		body.style.filter = "blur(10px)";
		body.style.overflow = "hidden";
		navi.style.filter = "blur(10px)";
		panel.style.filter = "blur(10px)";
	}

	// Function to close the modal
	function closeLinkModal() {
		linkModal.style.display = "none";
		overlay.style.display = "none";
		body.style.filter = "none";
		navi.style.filter = "none";
		panel.style.filter = "none";
	}

	// Event listener to open the modal when the button is clicked
	addLinkBtn.addEventListener("click", openLinkModal);

	// Event listener to close the modal when the close button is clicked
	closeLinkModalBtn.addEventListener("click", closeLinkModal);

	// =============== upload popup ===========

	const fileModal = document.getElementById("fileModal");
	const uploadFileBtn = document.getElementById("uploadFileBtn");
	const closefileBtn = document.getElementById("closefileBtn");

	// Function to open the modal
	function openfileModal() {
		fileModal.style.display = "block";
		overlay.style.display = "block";
		body.style.filter = "blur(10px)";
		navi.style.filter = "blur(10px)";
		panel.style.filter = "blur(10px)";
	}

	// Function to close the modal
	function closefileModal() {
		fileModal.style.display = "none";
		overlay.style.display = "none";
		body.style.filter = "none";
		navi.style.filter = "none";
		panel.style.filter = "none";
	}

	// Event listener to open the modal when the button is clicked
	uploadFileBtn.addEventListener("click", openfileModal);

	// Event listener to close the modal when the close button is clicked
	closefileBtn.addEventListener("click", closefileModal);

	// =====attachment=============
	document
		.getElementById("fileToUpload")
		.addEventListener("change", function (event) {
			var previewContainer = document.getElementById("preview-container");

			var files = event.target.files;

			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				var reader = new FileReader();

				reader.onload = function (e) {
					var preview = document.createElement("div");
					preview.className = "preview";

					var fileContent;

					// Check if the file is an image
					if (file.type && file.type.startsWith("image/")) {
						var img = document.createElement("img");
						img.src = e.target.result;
						preview.appendChild(img);
						fileContent = img;
					} else {
						// Display file icon or name for non-image files
						var fileName = document.createElement("span");
						fileName.textContent = file.name;
						fileName.className = "file-info";
						preview.appendChild(fileName);
						fileContent = fileName;
					}

					var removeButton = document.createElement("span");
					removeButton.className = "remove-preview";
					removeButton.innerHTML = "✖";
					removeButton.onclick = function () {
						preview.remove();
					};
					preview.appendChild(removeButton);

					previewContainer.appendChild(preview);
				};

				reader.readAsDataURL(file);
			}
		});

	//================link popup =============

	const youtubelinkModal = document.getElementById("youtubelinkModal");
	const addyoutubeLinkBtn = document.getElementById("addyoutubeLinkBtn");
	const closeyoutubeLinkModalBtn = document.getElementById(
		"closeyoutubeLinkModal"
	);

	// Function to open the modal
	function openyoutubeLinkModal() {
		youtubelinkModal.style.display = "block";
		overlay.style.display = "block";
		body.style.filter = "blur(10px)";
		body.style.overflow = "hidden";
		navi.style.filter = "blur(10px)";
		panel.style.filter = "blur(10px)";
	}

	// Function to close the modal
	function closeyoutubeLinkModal() {
		youtubelinkModal.style.display = "none";
		overlay.style.display = "none";
		body.style.filter = "none";
		navi.style.filter = "none";
		panel.style.filter = "none";
	}

	// Event listener to open the modal when the button is clicked
	addyoutubeLinkBtn.addEventListener("click", openyoutubeLinkModal);

	// Event listener to close the modal when the close button is clicked
	closeyoutubeLinkModalBtn.addEventListener("click", closeyoutubeLinkModal);
});
