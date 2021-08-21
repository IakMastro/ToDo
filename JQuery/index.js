$(document).ready(function() {
    $('#add_button').on('click', function() {
        $('ul').append("<li>".concat($('#new_item').val().trim()).concat("</li>"))
    }) 
})