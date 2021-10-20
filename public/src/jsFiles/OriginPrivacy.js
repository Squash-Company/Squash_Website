
var preferredLanguages = navigator.language
var url = window.location.href

if(!url.includes("?lang=" + preferredLanguages))
    window.history.pushState('', 'Privacy', url + "?lang=" + preferredLanguages);

document.querySelectorAll("section").forEach(elem => 
    { 
        elem.className = elem.className + " " + readableRandomStringMaker(10)
    });
    
    document.querySelectorAll("iframe").forEach(elem => 
        { 
            elem.id = readableRandomStringMaker(10)
        });
    
    function readableRandomStringMaker(length) {
        for (var s=''; s.length < length; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJ-KLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random()*62|0));
        return s;
    }