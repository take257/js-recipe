const input = document.getElementById("input")
const addButton = document.getElementById("add-button")

console.dir(input)

addButton.onclick = function () {
  const text = input.value
  list.push(text)
  localStorage.list = JSON.stringify(list)

  const card = document.create
}
