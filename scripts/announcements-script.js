var released = document.getElementsByClassName('released-container')[0]
var drafts = document.getElementsByClassName('drafts-container')[0]

var released_tab = document.getElementsByClassName('rel')[0]
var drafts_tab = document.getElementsByClassName('dra')[0]


// Function to set a cookie with the active tab
function setActiveTabAsCookie(tabName) {
    document.cookie = `activeTab=${tabName};`;
  }
  
  // Function to get the active tab from a cookie
  function getActiveTabFromCookie() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('activeTab=')) {
        return cookie.substring('activeTab='.length);
      }
    }
    return null;
  }


//event listeners
released_tab.addEventListener("click", () => {   
    handleTabSwitch(released);
})

drafts_tab.addEventListener("click", () => {
    handleTabSwitch(drafts);
})
  
  // Function to handle tab switching and store the active tab
  function handleTabSwitch(tabName) {
    if(tabName === drafts){
        released.style.display = "none"
        drafts.style.display = "block"
    //underline
        released_tab.className = "tab rel not-current"
        drafts_tab.className = "tab dra current"
        setActiveTabAsCookie(drafts);
    }

    else{
        released.style.display = "block"
    drafts.style.display = "none"
    //underline
    released_tab.className = "tab rel current"
    drafts_tab.className = "tab dra not-current"
    setActiveTabAsCookie(released);
    }
  }
  
  // Check cookies if it is stored
  document.addEventListener('DOMContentLoaded', () => {
    const storedActiveTab = getActiveTabFromCookie();
    if (storedActiveTab) {
      handleTabSwitch(storedActiveTab);
    }
  });
  