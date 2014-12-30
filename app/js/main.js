$(function() {
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
    $("img").unveil(200, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
})
$(function() {
    // if ($.cookie('msg') && $.cookie('msg') == "yes") {
    //     console.log("Already submitted");
    //     return false;
    // } else {
    //     console.log("first timer");
    //     window.location = "/subscribe";
    //     return true;
    // }
    var request;

    // Bind to the submit event of our form
    $("#foo").submit(function(event) {

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        // Fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxMTKRdHyIM_AvkD4YxaB45BeAoDWmt_rbHJON_gDGi_KedmTg/exec",
            type: "post",
            data: serializedData
        });

        // Callback handler that will be called on success
        request.done(function(response, textStatus, jqXHR) {
            // Log a message to the console
            console.log("Hooray, it worked!");
            var COOKIE_NAME = 'splash-page-cookie';
            $go = $.cookie(COOKIE_NAME);
            $.cookie(COOKIE_NAME, 'test', { path: '/', expires: 6 });
            window.location = "/trends";
        });

        // Callback handler that will be called on failure
        request.fail(function(jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            window.location = "/trends";
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function() {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });

        // Prevent default posting of form
        event.preventDefault();
    });
});
