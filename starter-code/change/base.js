console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $(".add").change(function() {
    var total = parseInt($("#left").val()) +  parseInt($("#right").val());
    $("#total").val(total);
  });

})
