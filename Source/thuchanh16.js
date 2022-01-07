let d = document.getElementById("khuvuc");
d.addEventListener("change",mychange);
function mychange(){
    let a = parseFloat(document.getElementById("toan").value);
    let b = parseFloat(document.getElementById("van").value);
    let c = parseFloat(document.getElementById("anh").value);
    let x = parseFloat(document.getElementById("khuvuc").value);
        y = a + b + c + x;
        console.log(y);
}
function tong(){
    document.getElementById("ketqua").innerHTML=" Tổng điểm " + (y);
}

