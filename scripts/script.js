const overlay = document.getElementById('overlay');

var arrow = document.getElementById('arrow')
var heading = document.getElementsByClassName('panel-heading')[0]
var details = document.getElementsByClassName('details')[0]

heading.addEventListener("click", () => {
    if(arrow.className === "down")
    {
        arrow.className = "up"
        details.style.display = "none"
        arrow.style.content = "url('rsc/icons8-chevron-up-30.png')"
    }
    else
    {
        arrow.className = "down"
        details.style.display = "block"
        arrow.style.content = "url('rsc/icons8-chevron-down-30.png')"
    }

})

const menu = document.getElementById('menu')
const panel = document.getElementsByClassName('side-panel-container')[0]
const close = document.getElementById('close')
const body = document.getElementsByClassName("body")[0]
const navi = document.getElementsByClassName("navigation")[0]
const mainbody = document.body;

menu.addEventListener("click", () => {
    const overlay = document.getElementById('overlay');
    mainbody.style.overflow = "hidden"
    overlay.style.display = "block";
    panel.style.display = "block"
    panel.style.zIndex = "100";
    body.classList.add('blurred-background');

})

close.addEventListener("click", () => {
const overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    panel.style.display = "none"
    panel.style.zIndex = "1";
    body.style.filter = "none"
    mainbody.style.overflow = "scroll"
    body.classList.remove('blurred-background');
})

var noti = document.getElementsByClassName('noti-icon')[0]
var noti_list = document.getElementsByClassName('notification-list-container')[0]

var profile = document.getElementsByClassName('image')[0]
var profile_close = document.getElementsByClassName('profile-close')[0]
var prof_list = document.getElementsByClassName('profile-container')[0]
var noti_close = document.getElementsByClassName('notification-close')[0]

noti.addEventListener("click", () => {
        noti_list.className = "notification-list-container noti-display"
        const overlay = document.getElementById('overlay');
        mainbody.style.overflow = 'hidden'
        overlay.style.display = 'block';
        body.classList.add('blurred-background');

})

noti_close.addEventListener("click", () => {
    noti_list.className = "notification-list-container noti-notdisplay"
    const overlay = document.getElementById('overlay');
    mainbody.style.overflow = 'scroll'
    overlay.style.display = 'none';
    body.classList.remove('blurred-background');

})

profile.addEventListener("click", () => {
  
        prof_list.className = "profile-container prof-display"
        const overlay = document.getElementById('overlay');
        mainbody.style.overflow = 'hidden'
        overlay.style.display = 'block';
        body.classList.add('blurred-background');
})

profile_close.addEventListener("click", () => {

    prof_list.className = "profile-container prof-notdisplay"
    const overlay = document.getElementById('overlay');
    mainbody.style.overflow = 'scroll'
    overlay.style.display = 'none';
    body.classList.remove('blurred-background');

})
