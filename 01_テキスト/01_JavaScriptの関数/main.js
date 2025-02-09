// 練習問題 １

//練習問題2
const plus1 = function (x) {
  return x + 1
}
//const ans = plus1(1)
console.log(plus1(1))
// 関数名:
// 引数:
// 返り値:

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const fi = function (n) {
  return 1 + 3 * n
}
const f2 = function (n) {
  return 10 ** n
}
const f3 = function (n) {
  return f1(n) + f2(n)
}
// f2: 1, 10, 100, 1000, 10000, ...

// f3: 2, 14, 107, 1010, 10013, ...

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
const multiply = function (x, y) {
  return x * y
}
console.log(multiply(6, 7))

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
const plusRound = function (x, y) {
  const seisuu_x = Math.trunc(x)
  const seisuu_y = Math.trunc(y)
  return seisuu_x * seisuu_y
} //plusroundだった
console.log(plusRound(2.3, 3.8))

/** 
function sayHelloTo(name) {
  alert("Hello, " + name + "!")
}

sayHelloTo("ゆうゆ")
*/

/**
sayHelloTo("ようよう")
const alertTime = function () {
  alert(new Date().toLocaleString())
}

alertTime()
 */
