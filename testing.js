let nae = document.getElementById("name")
let prnt = document.getElementById("here")
let form = document.getElementById("form")
function press(e) {
    e.preventDefault();
    prnt.textContent = nae.value + ", thats u ain't it?"
}
form.addEventListener("submit", press)