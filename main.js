"use strict";

let a = +prompt("num1=");
let b = +prompt("num2=");

const elText = document.querySelector(".answer");
const elBtn1 = document.querySelector(".btn-subtraction");
const elBtn2 = document.querySelector(".btn-multiple");
const elBtn3 = document.querySelector(".btn-add");
const elBtn4 = document.querySelector(".btn-division");
const elBtn5 = document.querySelector(".btn-clear");
const elBtn6 = document.querySelector(".btn-again");


elBtn1.addEventListener("click", function (e) {
  elText.textContent = a - b;
});
elBtn2.addEventListener("click", function (e) {
  elText.textContent = a * b;
});
elBtn3.addEventListener("click", function (e) {
  elText.textContent = a + b;
});
elBtn4.addEventListener("click", function (e) {
  elText.textContent = a / b;
});
elBtn5.addEventListener("click", function (e) {
  elText.textContent = "";
});
 elBtn6.addEventListener("click", function (e) {
  document.location.reload()
  });



  // let week = +prompt("Hafta kuni (1-7): ");

// switch (week) {
//   case 1:
//     alert("Dushanba");
//     break;
//   case 2:
//     alert("Seshanba");
//     break;
//   case 3:
//     alert("Chorshanba");
//     break;
//   case 4:
//     alert("Payshanba");
//     break;
//   case 5:
//     alert("Juma");
//     break;
//   case 6:
//     alert("Shanba");
//     break;
//   case 7:
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Xato ketdi");
// }
