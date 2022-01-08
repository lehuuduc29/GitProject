function tren(){
   let y = parseInt(document.getElementById("trochoi").style.top);
   document.getElementById("trochoi").style.top = (y - 19) + "px";
}
function phai(){
   let y = parseInt(document.getElementById("trochoi").style.left);
   document.getElementById("trochoi").style.left = (y + 19) + "px";
}
function trai(){
    let y = parseInt(document.getElementById("trochoi").style.left);
    document.getElementById("trochoi").style.left = (y - 19) + "px";
}
function duoi(){
    let y = parseInt(document.getElementById("trochoi").style.top);
    document.getElementById("trochoi").style.top = (y + 19) + "px";
}