document.addEventListener('DOMContentLoaded', function () {

    // ============== announcement popup =================

    const announcementModal = document.getElementById('announcementModal');
    const openPopupBtn = document.getElementById('openAnnouncementPopup');
    const closeModalBtn = document.getElementById('closeAnnouncementPopup');
    const announcementHeadingInput = document.getElementById('announcementHeading');
    const announcementDescriptionTextarea = document.getElementById('announcementDescription');


    // Function to open the modal
    function openAnouncementModal() {
        announcementModal.style.display = 'block';
    }

    // Function to close the modal
    function closeAnnouncementModal() {
        announcementModal.style.display = 'none';
    }

    // Event listener to open the modal when the button is clicked
    openPopupBtn.addEventListener('click', openAnouncementModal);

    // Event listener to close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', closeAnnouncementModal);

    announcementHeadingInput.defaultValue='Announcement';
    announcementDescriptionTextarea.defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum eaque sequi, quod quam earum asperiores, quibusdam libero rem a placeat quis doloribus eligendi cum maiores iusto facere repellat. Sequi asperiores ducimus, quae nihil labore atque totam voluptatem vitae laborum quibusdam repellendus, eum, iure est dolor quasi neque sit doloremque.'
    

    //================link popup =============

    const linkModal = document.getElementById('linkModal');
    const addLinkBtn = document.getElementById('addLinkBtn');
    const closeLinkModalBtn = document.getElementById('closeLinkModal');


    // Function to open the modal
    function openLinkModal() {
        linkModal.style.display = 'block';
    }

    // Function to close the modal
    function closeLinkModal() {
        linkModal.style.display = 'none';
    }

    // Event listener to open the modal when the button is clicked
    addLinkBtn.addEventListener('click', openLinkModal);

    // Event listener to close the modal when the close button is clicked
    closeLinkModalBtn.addEventListener('click', closeLinkModal);



    // =============== upload popup ===========

    const fileModal = document.getElementById('fileModal');
    const uploadFileBtn = document.getElementById('uploadFileBtn');
    const closefileBtn = document.getElementById('closefileBtn');


    // Function to open the modal
    function openfileModal() {
        fileModal.style.display = 'block';
    }

    // Function to close the modal
    function closefileModal() {
        fileModal.style.display = 'none';
    }

    // Event listener to open the modal when the button is clicked
    uploadFileBtn.addEventListener('click', openfileModal);

    // Event listener to close the modal when the close button is clicked
    closefileBtn.addEventListener('click', closefileModal);

});
