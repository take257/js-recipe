localStorage.course = "いいな"

//どの形であっても文字列に変換される。配列でも
const num_Array = [1, 2, 3, 4]
const num_Obj = {
  uniqueContent: "チーム開発",
  language: "JavaScript",
}
const fruits = ["りんご", "みかん", "パイナップル"]

localStorage.num_Array = JSON.stringify(num_Array)
localStorage.num_Obj = JSON.stringify(num_Obj)
localStorage.fruits = JSON.stringify(fruits)
console.log(localStorage.num_Array) // OK
console.log(localStorage.num_Obj) // OK
