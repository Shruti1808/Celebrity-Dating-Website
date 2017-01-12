$(document).ready(function() {
  $("form#dating").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var gender = $("#gender").val();
    
      if (gender === 'male' && age < 26) {
        $(".leighton").show();
      } else if (gender === 'male' && age >= 26) {
        $(".angelina").show();
      } else if (gender === 'female' && age < 26) {
          $(".justin").show();
      } else if (gender === 'female' && age >= 26) {
            $(".leo").show();
      }

    // } else {
    //       alert ("Please enter your information")};


  });
});
