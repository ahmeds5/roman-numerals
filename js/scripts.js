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
} else if(userNumber===10) {
    return("X");
} else if (userNumber>10 && userNumber<40) {
    return("X" + toNumeral(userNumber-10));
} else if(userNumber===40) {
    return("XL");
} else if (userNumber===50) {
    return("L");
} else if(userNumber>40 && userNumber<50) {
    return("XL"+ toNumeral(userNumber-40));
} else if(userNumber>50 && userNumber<90)
    return("L" + toNumeral(userNumber-50));

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
