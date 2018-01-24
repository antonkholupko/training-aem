(function ($, document) {
    "use strict";
    $(document).on("foundation-contentloaded", function(e) {
        console.log("Test");
        $(document).on("dialog-ready", function() {
            $(document).find(".reenable-droptarget").find(".coral-FileUpload-trigger").attr('style', 'display: none !important');
            $(document).find(".reenable-droptarget").find(".cq-FileUpload-thumbnail").attr('style', 'display: block !important');
        });
    });

})(jQuery, document);