const item = document.getElementsByClassName("item");
var lit = 24;

function pickBlue() {
    var blue = item[Math.floor((Math.random() * 48))];
    while (blue == item[lit]) {
        var blue = item[Math.floor((Math.random() * 48))];
    }
    blue.style.backgroundColor = "rgb(0, 255, 255)";
}

pickBlue();

document.addEventListener("keyup", move)
function move(event) {
    var checkCode = event.keyCode;
    if (checkCode == 87 || checkCode == 38) {
        item[lit].style.backgroundColor = "#000";
        lit = lit - 7;
        if (lit < 0) {
            lit = lit + 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
        event.preventDefault;
    }
    if (checkCode == 65 || checkCode == 37) {
        item[lit].style.backgroundColor = "#000";
        lit = lit - 1;
        if (lit < 0) {
            lit = lit + 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
        event.preventDefault;
    }
    if (checkCode == 68 || checkCode == 39) {
        item[lit].style.backgroundColor = "#000";
        lit = lit + 1;
        if (lit > 48) {
            lit = lit - 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
        event.preventDefault;
    }
    if (checkCode == 83 || checkCode == 40) {
        item[lit].style.backgroundColor = "#000";
        lit = lit + 7;
        if (lit > 48) {
            lit = lit - 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
        event.preventDefault;
    }
}
function up() {
    item[lit].style.backgroundColor = "#000";
        lit = lit - 7;
        if (lit < 0) {
            lit = lit + 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
}
function down() {
    item[lit].style.backgroundColor = "#000";
        lit = lit + 7;
        if (lit > 48) {
            lit = lit - 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
}
function left() {
    item[lit].style.backgroundColor = "#000";
        lit = lit - 1;
        if (lit < 0) {
            lit = lit + 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
}
function right() {
    item[lit].style.backgroundColor = "#000";
        lit = lit + 1;
        if (lit > 48) {
            lit = lit - 49;
        }
        if (item[lit].style.backgroundColor == "rgb(0, 255, 255)") {
            pickBlue();
        }
        item[lit].style.backgroundColor = "rgb(0, 100, 0)";
}