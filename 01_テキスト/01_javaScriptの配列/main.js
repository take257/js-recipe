const taiikuSeiseki = [1, 3, 5]
console.log(taiikuSeiseki)

const barabara = ["とーや", 3, "やすなり”"]
console.log(barabara)

const toyaBijutsu = 1
const ryotaBijutsu = 3
const yasunariBijutsu = 5

const bijutsuSeiseki = [toyaBijutsu, ryotaBijutsu, yasunariBijutsu]
console.log(bijutsuSeiseki)

const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutouku: 5 },
  { name: "りょーた", taiiiku: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, doutoku: 1 },
]
console.log(seisekibo)
console.log(seisekibo[0])
console.log(seisekibo[0].name)

seisekibo[0] = { name: "ひかきん", taiiku: 5, bijutu: 5, doutoku: 5 }
console.log(seisekibo[0])
console.log(seisekibo)

console.dir(seisekibo)
console.log(seisekibo.length)

for (let i = 0; i < seisekibo.length; i++) {
  console.log(i + "番目の要素は", seisekibo[i])
}

console.log(seisekibo[seisekibo.length - 1])

const aisatsu = ["おはよう", "こんにちは"]
aisatsu.push("こんばんは")
console.log(aisatsu)

const konbanwa = aisatsu.pop()
console.log(aisatsu)
console.log(konbanwa)

const countries = ["japan", "South Korea", "Rossia", "China"]
countries.splice(2, 1)
console.log(countries)

countries.splice(2, 0, "Taiwan")
console.log(countries)

const tokai = ["Aichi", "Gifu", "Mie", "Shizuoka"]
const indexOfGifu = tokai.indexOf("Gifu")
console.log(indexOfGifu)
console.log(tokai[indexOfGifu])
//インデックスの数を入れているのと同じ=tokai[1]

console.log(tokai.indexOf("Tokyo"))

const keihanna = [{ city: "奈良" }, { city: "京都" }, { city: "大阪" }]
const indexOfOsaka = keihanna.findIndex(function (obj) {
  return obj.city === "大阪"
})
//trueならその要素のインデックス(インデックスの数字)を返す
console.log(indexOfOsaka)
console.log(keihanna[indexOfOsaka]) //配列の中からindexOFOSaka関数を満たすものを取得する。

const shikoku = [
  { city: "高松" },
  { city: "松山" },
  { city: "高知" },
  { city: "徳島" },
]
const tokushima = shikoku.find((obj) => {
  return obj.city === "徳島"
})

console.log(tokushima)
//findindexはインデックスの数字を探す。findは要素を取得してくる

const agyou = ["あ", "い", "う", "え", "お"]

console.log(agyou.includes("あ"))
console.log(agyou.includes("か"))

const hokuriku = [
  { city: "新潟" },
  { city: "富山" },
  { city: "金沢" },
  { city: "福井" },
]
const hasKanazawa = hokuriku.some(function (obj) {
  return obj.city === "金沢"
}) //obj にはhokurikuの要素が順番に入る
//obj.cityが'金沢'だったら'true'祖霊z害はfalseが入る
console.log(hasKanazawa)

const irohaIchinodan = ["い", "ろ", "は", "に", "ほ", "へ", "と"]
const irohaNinodan = ["ち", "り", "ぬ", "る", "を"]

const irohakannsei = [...irohaIchinodan, ...irohaNinodan]
console.log(irohakannsei)

//forを使ったループ
const seisekihyou = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]
for (let i = 0; i < seisekihyou.length; i++) {
  console.log(seisekihyou[i])
}

seisekihyou.forEach(function (seito) {
  console.log(seito)
})

const ichinodan = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ninodan = ichinodan.map(function (suji, index) {
  return suji * 2
})
console.log(ninodan)

const x = seisekihyou.filter(function (hyouka) {
  return hyouka.taiiku >= 3
})
console.log(x)

//ここからブラウザへのデータ保存

localStorage.course = "Web"
localStorage.course = "WebExpert"

const geekSalon = ["web", "game", "iphone", "webExpert"]
const webExpert = {
  uniqueContent: "チーム開発",
  language: "jabaScript",
}

localStorage.geekSalon = JSON.stringify(geekSalon)
localStorage.webExpert = JSON.stringify(webExpert)

console.log(localStorage.geekSalon)
console.log(localStorage.webExpert)

let courses = JSON.parse(localStorage.geekSalon)
let courseDetails = JSON.parse(localStorage.webExpert)

console.log(courses)
console.log(courseDetails)

const fruits = ["りんご", "みかん", "パイナップル"]
localStorage.xxx = JSON.stringify(fruits)
//let xxx = JSON.parse(localStorage.xxx)
console.log(localStorage.xxx)

//質問　練習問題でなぜJSON.parseが必要ないのか
