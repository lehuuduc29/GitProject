function songay(){
    let a = document.getElementById("sothang").value;
    a = parseInt(a);
    switch (a){
        case (1):
        case (3):
        case (5):
        case (7):
        case (8):
        case (10):
        case (12):
            document.getElementById("ketqua").innerHTML="31 ngay";
                break;
        case(4):
        case(6):
        case(9):
        case(11):
            document.getElementById("ketqua").innerHTML="30 ngay";
                break;
        case(2):
            document.getElementById("ketqua").innerHTML="28 hoac 29 ngay";
                break;
        default:
            document.getElementById("ketqua").innerHTML="hãy nhập từ tháng 1 đến tháng 12";
                break;
    }
}