// whether you get graduated or not;
// fullAttendance Percentage
// All fees
// NoCurrent arrears

var isHavingFullAttendance = true;
var isHePaidAllFees = true;
var isHaveCompletedArrears = true;

// if (isHavingFullAttendance) {
//   console.log("Congrats you have no attendance lag.");

//   if (isHePaidAllFees) {
//     console.log("you have paid all the fees");

//     if (isHaveCompletedArrears) {
//       console.log("your graduation ready");
//     }
//   }
// }

// if(isHavingFullAttendance && isHePaidAllFees && isHaveCompletedArrears){
//   console.log("your graduation ready !!!");
// }else{
//   console.log("Sorry you have some pending works, please check with accounts department");
// }


// ---------------------------

// movie theatre

// Normal ticket
// golden ticket
// platinum ticket

// theatre will allow you if you have any one of the ticket

var normalTicket = true;
var goldenTicket = true;
var platinumTicket = true;

// && - AND, || - OR

if(normalTicket || goldenTicket || platinumTicket){
console.log('Welcome to Satyam Cinemas');
}else{
  console.log('Sorry sir/madam, you are not allowed!');
}

