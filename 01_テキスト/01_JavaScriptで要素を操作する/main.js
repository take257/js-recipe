// 要素を取得する
/**
const element = document.getElementById("elementId")
console.log("「要素を取得する」で取得した要素 →", element)
 */
const element_youso = document.getElementById("element-id")
console.log(element_youso)

// 要素を取得する - 発展：子要素を取得する
const buttons = document.getElementById("buttons")
const button0 = buttons.children[5]
console.log(button0)
for (const button of buttons.children) {
  button.onclick = function () {
    alert("clicked: " + button.textContent)
  }
}

const element = document.getElementById("element")
element.textContent = "いえい"

// 要素を変更する - textContent
const elementTextContent = document.getElementById("element-textContent")
elementTextContent.textContent = "おはよう"

// 要素を変更する - style
const elementStyle = document.getElementById("element-style")
elementStyle.style.fontWeight = "bold"

// 要素を変更する - className
const elementClassName = document.getElementById("element-className")
elementClassName.className = "nice-element"

// 要素を変更する - classList
const elementClassList = document.getElementById("element-classList")
elementClassList.classList.add("great-element")

// 要素を追加する - appendChild
const elementAppendChild = document.getElementById("element-appendChild")
const div1 = document.createElement("div")
div1.textContent = "こんばんは"
elementAppendChild.appendChild(div1)

// 要素を追加する - 最新の方法
const elementPrepend = document.getElementById("element-prepend")
const div2 = document.createElement("div")
div2.textContent = "おはよう"
elementPrepend.prepend(div2)

// 要素を削除する - remove
const elementRemove = document.getElementById("element-remove")
elementRemove.remove()

const card = document.createElement("div")
card.className = "card"
card.textContent = "こんばんは"

const monster = document.createElement("div") //DOMツリーに追加する必要がある！
monster.className = "monster"
monster.textContent = "モンストモンスト" //
const element_monster = document.querySelector(".element_monster")
element_monster.append(monster)
//モンストを消す
//monster.remove()

//katzuteのidの部分を空にする。
const monster_Nakami = document.querySelector(".element_monster")
monster_Nakami.textContent = ""
//クラスとidの使い分けをすること！！！！
