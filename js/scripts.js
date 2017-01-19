//Business Logic
var numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "LC", "C", "CD", "D", "DM", "M"];
var values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

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
