const userName = prompt("Введите Имя: ")
let count = 0

if (userName) {
    document.getElementById('title').innerHTML = "Ваш список дел, " + userName + ":"
} else {
    document.getElementById('title').innerHTML = "Список дел анонимного пользователя"
}
function addTask() {
    count++ 
    if (count > 5) {
        document.getElementById('error').innerHTML = "Можно ввести 5 дел"
        return
    }
    const input = document.getElementById('input')
    const task = input.value

    const myList = document.getElementById('list')
    myList.innerHTML = myList.innerHTML + '<li>' + task + '<li>'
    input.value = ""

}
