//Business Logic



function toNumeral(userNumber) {
  var result= "";
  if(userNumber>0 && userNumber<4) {
    for(i=0; i<userNumber; i++)
      result += "I";
} else if (userNumber === 4) {
    return("IV");
} else if (userNumber === 5) {
    return("V");
} else if(userNumber>=6 && userNumber<9) {
    return("V"+ toNumeral(userNumber-5));
} else if(userNumber===9) {
    return("IX");
}
  return result;
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








// function toNumeral(userNumber) {
//   for(i=0; i<userNumber; i++){
//     if(userNumber===values[i]) {
//       return numerals[i];
//   } else {
//
//     }
//   };
// };
