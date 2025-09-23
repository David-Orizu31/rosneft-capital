function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

// Load the Google Translate API
(function() {
    var gt = document.createElement('script');
    gt.type = 'text/javascript';
    gt.async = true;
    gt.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gt, s);
})();

// Handle dropdown clicks
document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll("#languageList .dropdown-item").forEach(function(el) {
    el.addEventListener("click", function(e) {
    e.preventDefault();
    var lang = this.getAttribute("data-lang");
    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    }
    });
});
});