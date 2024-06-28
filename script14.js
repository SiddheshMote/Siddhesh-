document.getElementsByTagName('img')[0].onmouseenter=function(){
    big()
};
function big(){
    document.getElementsByTagName('img')[0].classList.remove('img');
    document.getElementsByTagName('img')[0].classList.add('large');
}
document.getElementsByTagName('img')[0].onmouseout=function(){
    small()
};
function small(){
    document.getElementsByTagName('img')[0].classList.remove('large');
    document.getElementsByTagName('img')[0].classList.add('img');
}