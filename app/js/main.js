// var url = window.location;
// // // Will only work if string in href matches with location
// // $('ul.nav a[href="'+ url +'"]').parent().addClass('active');

// // Will also work for relative and absolute hrefs
// $('.navTabs-item a').filter(function() {
//     return this.href == url;
// }).parent().addClass('is-active');

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

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

var container = document.querySelector('#container');
var msnry = new Masonry(container, {
    // options...
    itemSelector: 'article.panelPost',
    columnWidth: 'article.panelPost',
    gutter: 10
});
// $(function() {
//     function closeSearch() {
//         var $form = $('.navbar-collapse form[role="search"].active')
//         $form.find('input').val('');
//         $form.removeClass('active');
//     }

//     // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
//     $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
//         event.preventDefault();
//         var $form = $(this).closest('form'),
//             $input = $form.find('input');
//         $form.addClass('active');
//         $input.focus();
//     });
//     // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
//     // if your form is ajax remember to call `closeSearch()` to close the search container
//     $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
//         event.preventDefault();
//         var $form = $(this).closest('form'),
//             $input = $form.find('input');
//         $('#showSearchTerm').text($input.val());
//         closeSearch()
//     });
// });
