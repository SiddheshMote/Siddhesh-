var a, b;
var d = 1;
document.querySelector('#b').onclick = function () {
    var a = parseInt(Math.random() * 3 + 1);
    document.querySelector('#h').textContent = a;
    var g = document.querySelector('#b');
    g.disabled = true;
    var t = document.querySelector('#e');
    t.disabled = false;
}
var c, e;
var f = 1;
var count1 = 0;
document.querySelector('#e').onclick = function () {
    var c = parseInt(Math.random() * 3 + 1);
    b = document.querySelector('#h').textContent;
    document.querySelector('#f').textContent = c;
    if (b == c) {
        const y = document.querySelector('#e');
        y.disabled = true;
    }
    count1 = count1 + 1;
    document.querySelector('#x').textContent = count1;
}


var m, n;
var o = 1;
document.querySelector('#p').onclick = function () {
    var m = parseInt(Math.random() * 3 + 1);
    document.querySelector('#m').textContent = m;
    var k = document.querySelector('#p');
    k.disabled = true;
    var t1 = document.querySelector('#q');
    t1.disabled = false;
}
var p, q;
var r = 1;
var count2 = 1;
document.querySelector('#q').onclick = function () {
    var s = parseInt(Math.random() * 3 + 1);
    document.querySelector('#l').textContent = s;
    n = document.querySelector('#m').textContent;
    
    if (n == s) {
        const y = document.querySelector('#q');
        y.disabled = true;
        var result="";
        if (count1 < count2) {
            result = 'Player 1 is Win.';
            document.querySelector('#z').textContent = result;
        }
        else if (count1 > count2) {
            result = 'Player 2 is Win.';
            document.querySelector('#z').textContent = result;
        }
        else if (count1 == count2) {
            result = 'Match is Tie.';
            document.querySelector('#z').textContent = result;
        }
    }
    document.querySelector('#y').textContent = count2;
    count2 = count2 + 1;
    
}