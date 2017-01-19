//Business Logic
var numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "LC", "C", "CD", "D", "DM", "M"];
var values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

function toNumeral(userNumber) {
  var numeral = [];
  for (var i = 1; i <= userNumber; i++) {
    numeral.push("I");
  }
  return numeral.join("");
};




// for(i=0; i<userNumber; i++){
//   if(userNumber===values[i]) {
//     return numerals[i];
//   } else {
//
//   }
// };




//UI Logic
$(document).ready(function(){
  $(".numberInput").submit(function(event) {
    event.preventDefault();
    var userNumber= parseInt($("#userNumber").val());
    var result= toNumeral(userNumber);
    $(".result").text(("result".slice(0)));
  });
});







// var remainders= [];
// function toNumeral(userNumber) {
//   for(i=0; i<1; i++) {
//     if(userNumber>0) {
//       var kilo= userNumber % 1000
//       remainders.push(kilo);
//     // } else if(100<=kilo<999) {
//       var cent= kilo % 100
//       remainders.push(cent);
//     // } else if(cent<=99) {
//       var deca= cent % 10
//       remainders.push(deca);
//     }
//   }
// };
// function toNumeral(userNumber) {
//   for(i=0; i<1; i++) {
//     if(userNumber>0) {
//       var kRome= ((userNumber / 1000).toString()).split(0,1)
//       remainders.push(kilo);
//     // } else if(100<=kilo<999) {
//       var cRome= kilo / 100
//       remainders.push(cent);
//     // } else if(cent<=99) {
//       var dRome= cent / 10
//       remainders.push(deca);
//     }
//   }
// };
