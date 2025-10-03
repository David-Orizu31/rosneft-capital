// Toggle theme
function changetheme() {
    var theme = $('#main-wrapper').attr('data-theme');

    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Apply theme + save it
function setTheme(mode) {
    if (mode === 'dark') {
        $('#main-wrapper').attr('data-theme', 'dark');
        $('.modeicon').attr('data-feather', 'sun');
        $('.table').addClass('table-dark');
    } else {
        $('#main-wrapper').attr('data-theme', 'light');
        $('.modeicon').attr('data-feather', 'moon');
        $('.table').removeClass('table-dark');
    }

    feather.replace(); // re-render icons
    localStorage.setItem('theme', mode); // save choice
}

// Load saved theme on page load
$(document).ready(function () {
    var savedTheme = localStorage.getItem('theme') || 'light'; // default light
    setTheme(savedTheme);
});

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
        setTimeout(() => {
            $('body').css('top', '0px');
        }, 1000);
    }
    });
});
});