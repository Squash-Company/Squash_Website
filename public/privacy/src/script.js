
var preferredLanguages = navigator.language
var url = window.location.href

if(!url.includes("?lang=" + preferredLanguages))
    window.history.pushState('', 'Privacy', url + "?lang=" + preferredLanguages);