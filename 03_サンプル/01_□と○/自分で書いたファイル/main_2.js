const figure = document.getElementById("figure")
// const squareButton = document.getElementById("square-button")
// const circleButton = document.getElementById("circle-button")

//htmlのfigure id　のクラスにrounded を追加している。後々、round+squre の形にしてそこに丸型のfiguremを設定する。
// circleButton.onclick = function () {
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function () {
//   figure.classList.remove("rounded")
// }

// console.dir(figure)

figure.onclick = function () {
  figure.classList.toggle("rounded")
}
