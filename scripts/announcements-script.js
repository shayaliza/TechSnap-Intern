var released = document.getElementsByClassName('released-container')[0]
var drafts = document.getElementsByClassName('drafts-container')[0]

var released_tab = document.getElementsByClassName('rel')[0]
var drafts_tab = document.getElementsByClassName('dra')[0]

// Function to set the active tab in local storage
function setActiveTabAsLocalStorage(tabName) {
    localStorage.setItem('activeTab', tabName);
}

// Function to get the active tab from local storage
function getActiveTabFromLocalStorage() {
    return localStorage.getItem('activeTab');
}

// Event listeners
released_tab.addEventListener("click", () => {
    handleTabSwitch(released);
})

drafts_tab.addEventListener("click", () => {
    handleTabSwitch(drafts);
})

// Function to handle tab switching and store the active tab
function handleTabSwitch(tabName) {
    if (tabName === drafts) {
        released.style.display = "none"
        drafts.style.display = "block"
        // Underline
        released_tab.className = "tab rel not-current"
        drafts_tab.className = "tab dra current"
        setActiveTabAsLocalStorage('drafts');
    } else {
        released.style.display = "block"
        drafts.style.display = "none"
        // Underline
        released_tab.className = "tab rel current"
        drafts_tab.className = "tab dra not-current"
        setActiveTabAsLocalStorage('released');
    }
}

// Check local storage if it is stored
document.addEventListener('DOMContentLoaded', () => {
    const storedActiveTab = getActiveTabFromLocalStorage();
    if (storedActiveTab) {
        handleTabSwitch(storedActiveTab);
    }
});

  