$(function() {
    $(document).on("dialog-ready", function() {
        var parent = $(".hidden-description").parent();
        parent.attr('style', 'display: none !important');
        var linkUrl = $(".logo-link-url").find(".js-coral-pathbrowser-input");
        var path = linkUrl.attr("value");
        var newPath = path.replace("/content/training", "");
        //path.attr('value', newPath.toString());
        $(".logo-link-url").find(".js-coral-pathbrowser-input").attr('value', newPath.toString());
    });
});
