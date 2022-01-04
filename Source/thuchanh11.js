function kiemtra(){
    let a = document.getElementById("sonhapvao").value;
    a = parseFloat(a);
    let b = a % 2;
    if (b==0) {
        alert((a) + " la so chan");
    } else{
        alert((a) + " la so le");
    }
}