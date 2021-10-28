var privacy_btn = document.getElementById('privacy_btn')
var about_btn = document.getElementById('about_btn')
var contact_btn = document.getElementById('contact_btn')
var logo_btn = document.getElementById('logo_btn')

//  Url types
var privacy_EN = ["privacy", "privacidade"]
var about_EN = ["about", "sobre", ""]
var contact_EN = ["contact", "contato"]

var proc_and_host = window.location.protocol + "//" + window.location.host

privacy_btn.addEventListener("click", () => {
    window.top.location.href = proc_and_host + getInstance() + "privacy/";
})

about_btn.addEventListener("click", () => {
    window.top.location.href = proc_and_host  + getInstance();
})

logo_btn.addEventListener("click", () => {
    window.top.location.href = proc_and_host  + getInstance();
})

contact_btn.addEventListener("click", () => {
    window.top.location.href = proc_and_host + getInstance() + "contact/";
})

function getInstance(){
    if(proc_and_host.includes('localhost') || proc_and_host.includes('5500')
    || proc_and_host.includes('5501')) return "/public/"
    else return "/";
}

//  This function will be called when the page is loaded
//  In the onload method
function checkLoc(){
    var path = replacePublic(document.referrer);
    if(privacy_EN.includes(path)){
        privacy_btn.style.backgroundColor = "var(--black)"

    }else if(about_EN.includes(path)){
        about_btn.style.backgroundColor = "var(--black)"
    } else if(contact_EN.includes(path)) {
        contact_btn.style.backgroundColor = "var(--black)"
    }
}

function replacePublic(url){
    var url = url.replace(proc_and_host, "");
    url = url.replace("/public", "");
    url = url.replace("public", "");
    url = url.replace(/[\/\\]/g,'');
    var splitTest = url.split("?");
    if(splitTest.length > 0){
        return url.split("?")[0];
    }
    else return url;
}