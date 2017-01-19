//Business Logic
var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var values = [1, 5, 10, 50, 100, 500, 1000];

function toNumeral(userNumber) {
  for(i=0; i<userNumber; i++){
    if(userNumber===values[i]) {
      return numerals[i];
    } else {
    }
  };
};




//UI Logic
$(document).ready(function(){
  $(".numberInput").submit(function(event) {
    event.preventDefault();
    var userNumber= parseInt($("#userNumber").val());
    var result= toNumeral(userNumber);
    $(".result").text(result);
  });
});
