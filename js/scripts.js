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

 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

$(function () {
    $(document).scroll(function () {
        var headerheight = $('.site-header').height();
        var navheight = $('.navbar').height();
        var totalheight = headerheight + navheight;
      var $nav = $(".navbar");
      $nav.toggleClass('sticky', $(this).scrollTop() > totalheight);
    });
});