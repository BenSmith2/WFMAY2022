var num1 = 3
console.log(num1)

var likes1 = document.querySelector("#likes")

function btn1() {
    num1++;
    likes1.innerText = num1 + ' Like(s)';
}
