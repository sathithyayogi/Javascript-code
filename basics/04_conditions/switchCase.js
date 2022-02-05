// railway ticket booking system
// economic, business, first class
// first class - couch number start from FC
// economic class - couch number start from EC
// business class - couch number start from BC

// var ticketType = "economic class";

// switch (ticketType) {
//   case "first class":
//     console.log("couch number start from FC");
//     break;
//   case "economic class":
//     console.log("couch number start from EC");
//     break;
//   case "business class":
//     console.log("couch number start from BC");
//     break;
//   default:
//     console.log("Invalid Ticket Class please verify with TTR");
//     break;
// }

var day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

