//const number = 24;

//if (number % 3 === 0) {
//  console.log(number + "!!!!!!!");
//} else {
//  console.log(number);
//}

//const number = 24;

//for (let n = 1; n <= number; n++) {
//  if (n % 3 === 0) {
//    console.log(n + "!!!!!!!");
//  } else {
//    console.log(n);
//  }
//}

//const genkiFunction = function (number) {
//  for (let n = 1; n <= number; n++) {
//    if (n % 3 === 0) {
//      console.log(`${n}!!!!!!`);
//    } else {
//      console.log(n);
//    }
//  }
//};

//genkiFunction(100);

//const display = document.getElementById("display")
//const plusButton = document.getElementById("plus-button")

//let count = 0

//plusButton.onclick = function () {
//  count += 1
//  display.textContent = count
//}

const figure = document.getElementById("figure")

figure.onclick = function () {
  figure.classList.toggle("rounded")
}
