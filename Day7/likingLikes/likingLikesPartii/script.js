var likeA = 9
var likeB = 12
var likeC = 9

function likebtnA() {
    while (likeA < 10) {
        likeA++;
    }
    // console.log(likeA)
    document.querySelector("#likeA").innerText=likeA + " like(s)"
}

function likebtnB() {
    while (likeB < 13) {
        likeB++;
    }
    // console.log(likeA)
    document.querySelector("#likeB").innerText = likeB + " like(s)";
}

function likebtnC() {
    while (likeC < 10) {
        likeC++;
    }
    // console.log(likeA)
    document.querySelector("#likeC").innerText=likeC + " like(s)"
}

