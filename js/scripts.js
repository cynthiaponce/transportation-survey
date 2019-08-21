$(document).ready(function() {
  $("form#transportation-survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name= work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $("#fun-responses").append(funTransportationMode + "<br>");
    });
    $("#transportation-survey").hide();
  });
});

  /* This sets the values of checked boxes aside in an array

          var userResponse = []
          $("input: checkbox[name=work-transportation]:checked").each(function () {
            var workTransportationMode = $(this).val();
            userResponses.push(workTransportationMode);
          });
  */



  /* We can manipulate this data in whatever fashion we please

        $("input:checkbox[name=work=transportation]:checked").each(function() {
          var workTransportationMode = $(this).val();
          var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
      });


  */
