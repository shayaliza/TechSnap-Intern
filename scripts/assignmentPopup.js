document.addEventListener('DOMContentLoaded', function () {
const addAssignmentModal = document.getElementById('addAssignmentModals');
const openAddAssignmentPopupBtn = document.getElementById('openAddAssignmentPopup');
const closeAddAssignmentModalBtn = document.getElementById('closeAddAssignmentPopup');
const addAssignmentHeadingInput = document.getElementById('addAssignmentHeading');
const addAssignmentDescriptionTextarea = document.getElementById('addAssignmentDescription');

var navi = document.getElementsByClassName("body")[0]
var panel = document.getElementsByClassName("side-panel-container")[0]
const overlay = document.getElementById('overlay');

console.log(navi.style.filter)



// Function to open the modal
function openAddAssignmentModal() {
    addAssignmentModal.style.display = 'block';
    overlay.style.display = 'block';
        // body.style.filter = "blur(10px)"
        // body.style.position = "fixed"
        navi.style.filter = "blur(10px)"
        panel.style.filter = "blur(10px)"
}

// Function to close the modal
function closeAddAssignmentModal() {
    addAssignmentModal.style.display = 'none';
    overlay.style.display = 'none';
    // body.style.filter = "none"
    // body.style.position = "static"
    navi.style.filter = "none"
    panel.style.filter = "none"

}

// Event listener to open the modal when the button is clicked
openAddAssignmentPopupBtn.addEventListener('click', openAddAssignmentModal);

// Event listener to close the modal when the close button is clicked
closeAddAssignmentModalBtn.addEventListener('click', closeAddAssignmentModal);

addAssignmentHeadingInput.defaultValue='Assignment';
addAssignmentDescriptionTextarea.defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum eaque sequi, quod quam earum a cum maiores iusto facere. '

})