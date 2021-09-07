$(document).ready(function(){
    $("#shoppingform").on('submit',function(e){
        var text =$('#addtoList').val();
        $("#shoppingList").append($('<li>').append(text));
        $('#addtoList').val();
        $('#addtoList').val('');
        e.preventDefault();
    });
});
$("#shoppingList").on('dblclick','li',function(){
    $(this).remove();
});
