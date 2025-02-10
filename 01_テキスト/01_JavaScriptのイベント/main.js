const button = document.getElementById("button")
//const alertMessage = function () {
//  alert("クリックしたね")
//}

//button.onclick = function () {
//  alert("クリックしたね")
//}
const alertMessage = function () {
  alert("クリックしたね")
}
button.onclick = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function (e) {
  console.log(e.key)
}

//ここから自己流
const button_peak = document.getElementById("button_peak")
const alertMessage_peak = function () {
  alert("さいこうでっす")
}
button_peak.onclick = alertMessage_peak
//文字列に対してonclick関数割り当て
const button_strings = document.getElementById("strings_button")
const alertMessage_strings = function () {
  alert("文字列でも関数割り当てできた")
}
button_strings.onclick = alertMessage_strings
//インプットやってみた
const inputText_2 = document.getElementById("input_text_2")
const inputDate_2 = document.getElementById("input_date_2")
/**入力1文字ごとにhelloが発動
onst sayHello_2 = function () {
  console.log("hello")
}
inputText_2.oninput = sayHello_2
inputDate_2.oninput = sayHello_2
 */

/**文字列は1文字ごとにその入力文字をconsoleに出力 */
const logValue_2 = function (e) {
  console.log(e.target.value)
  console.log(e)
}
inputText_2.oninput = logValue_2 //ogValue_2(inputText_2.oninput)はダメ。undifineだから。アロー関数をつかえばOK
inputDate_2.oninput = logValue_2

/** 
document.onkeydown = function (e) {
  console.log(e.key)
  console.log(e)
}
*/

/**
 * console(e)のtypeでイベントの種類がわかり、keyで入力内容がわかる
 */
