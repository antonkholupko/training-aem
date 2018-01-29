$(function() {
    $(document).on("dialog-ready", function() {
        var parent = $(".hidden-description").parent();
        parent.attr('style', 'display: none !important');
    });
});
