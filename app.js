
//Exercise 1

let favoriteNum = 4;

let guess = window.prompt("Input a number");
if (guess < favoriteNum){
  console.log("Too low");
}
else if (guess > favoriteNum) {
  console.log("Too high");
}
else {
  console.log("Congratulations!!!")
}

//Exercise 2

let birthMonth = window.prompt("What is your birth month?")

switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log("You were born in Winter.");
    break;
  case "March":
  case "April":
  case "May":
    console.log("You were born in Spring.");
    break;
  case "June":
  case "July":
  case "August":
    console.log("You were born in Summer.");
    break
  case "September":
  case "October":
  case "November":
    console.log("You were born in Fall.");
    break;
    default:
    console.log("Input invalid. Please enter a valid birth month.");
    break
}

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case '01': type = "Tank Top";
  break;
  case '02': type = "T-shirt";
  break;
  case '03': type = "Long Sleeve";
  break;
  case '04': type = "Sweat Shirt";
  break;
  default: type = "Other"
}

switch (colorId) {
case 'BL': color = "Black";
break;
case 'BL': color = "Blue";
break;
case 'RD': color = "Red";
break;
case 'PU': color = "Purple";
break;
default: color = "White"
}

switch (sizeId) {
  case 'S': size = "Small";
  break;
  case 'M': size = "medium";
  break;
  case 'L': size = "Large";
  break;
  case 'XL': size = "Extra Large";
  break;
  default: size = "One Size Fits All"
}

console.log(`Product: ${size} ${color} ${type}`);