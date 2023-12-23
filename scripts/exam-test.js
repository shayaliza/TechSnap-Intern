document.addEventListener('DOMContentLoaded', function () {
    const examTestModal = document.getElementById('examTestModal');
    const openExamTestPopupBtn = document.getElementById('openExamTestPopup');
    const closeExamTestModalBtn = document.getElementById('closeExamTestPopup');
    const examTestHeadingInput = document.getElementById('examTestHeading');
    const examTestDescriptionTextarea = document.getElementById('examTestDescription');
    
    var navi = document.getElementsByClassName("navigation")[0]
    var panel = document.getElementsByClassName("side-panel-container")[0]
    const overlay = document.getElementById('overlay');
    
    
    
    
    
    // Function to open the modal
    function openExamTestModal() {
        examTestModal.style.display = 'block';
        overlay.style.display = 'block';
            body.style.filter = "blur(10px)"
            body.style.position = "fixed"
            navi.style.filter = "blur(10px)"
            panel.style.filter = "blur(10px)"
    }
    
    // Function to close the modal
    function closeExamTestModal() {
        examTestModal.style.display = 'none';
        overlay.style.display = 'none';
        body.style.filter = "none"
        body.style.position = "static"
        navi.style.filter = "none"
        panel.style.filter = "none"
    
    }
    
    // Event listener to open the modal when the button is clicked
    openExamTestPopupBtn.addEventListener('click', openExamTestModal);
    
    // Event listener to close the modal when the close button is clicked
    closeExamTestModalBtn.addEventListener('click', closeExamTestModal);
    
    examTestHeadingInput.defaultValue='Assignment';
    examTestDescriptionTextarea.defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum eaque sequi, quod quam earum a cum maiores iusto facere. '
    
    })