$(document).ready(function() {
  $(".lazy").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});
});

(function() {
    'use strict';
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
})();


