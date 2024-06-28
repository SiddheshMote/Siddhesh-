var a, b;
var d = 1;
document.querySelector('#b').onclick = function () {
    var a = parseInt(Math.random() * 3 + 1);
    document.querySelector('#h').textContent = a;
    var m = document.querySelector('#b');
    m.disabled = true;
    var t = document.querySelector('#e');
    t.disabled = false;
}
var c, e;
var f = 1;
var count = 0;
document.querySelector('#e').onclick = function () {
    var c = parseInt(Math.random() * 3 + 1);
    b = document.querySelector('#h').textContent;
    document.querySelector('#f').textContent = c;
    if (b == c) {
        const y = document.querySelector('#e');
        y.disabled = true;
    }
    count = count + 1;
    document.querySelector('#x').textContent = count;
}
var p, q;
var r = 1;
document.querySelector('#p').onclick = function () {
    var p = parseInt(Math.random() * 3 + 1);
    document.querySelector('#m').textContent = p;
    var m = document.querySelector('#p');
    m.disabled = true;
    var t = document.querySelector('#q');
    t.disabled = false;
}
var i, j;
var k = 1;
var count2 = 1;
document.querySelector('#q').onclick = function () {
    var i = parseInt(Math.random() * 3 + 1);
    document.querySelector('#l').textContent = i;
    q = document.querySelector('#m').textContent;
    if (q == i) {
        const z = document.querySelector('#q');
        z.disabled = true;
    var Result="";
    if (count < count2) {
        Result = "Player 1 is win";
        document.querySelector('#z').textContent = Result;
    }
    else if(count > count2){
        Result = "Player 2 is win";
        document.querySelector('#z').textContent = Result;
    }
    else if(count == count2){
        Result = "Match is Tie";
        document.querySelector('#z').textContent = Result;
    }
}
    document.querySelector('#y').textContent = count2;
    count2 = count2 + 1;
    
}

