let a = prompt("nhap vao chieu cao cua ban");
let b = prompt("nhap vao can nang cua ban");
a = parseFloat(a);
b = parseFloat(b);
document.getElementById("chieucao").innerHTML="Chiều cao của bạn: " + (a) + "m";
document.getElementById("cannang").innerHTML="Cân nặng của bạn: " + (b) + "kg";
let c = b / (a*a);
document.getElementById("bmi").innerHTML="Chỉ số BMI của bạn là: " + (c);
function chiso(){
    if (c<16) {
        document.getElementById("ketqua").innerHTML=" Gầy độ III";
    } else 
        if (16<=c&&c<17) {
            document.getElementById("ketqua").innerHTML=" Gầy độ II";
        } else 
            if (17<=c&&c<18.5) {
                document.getElementById("ketqua").innerHTML=" Gầy độ I";
            } else 
                if (18.5<=c&&c<25) {
                    document.getElementById("ketqua").innerHTML=" Bình thường";
                } else 
                    if (25<=c&&c<30) {
                        document.getElementById("ketqua").innerHTML=" Thừa cân";
                    } else 
                        if (30<=c&&c<35) {
                            document.getElementById("ketqua").innerHTML=" Béo phì độ 1";
                        } else 
                            if (35<=c&&c<=40) {
                                document.getElementById("ketqua").innerHTML=" Béo phì độ II";
                            } else {
                                    document.getElementById("ketqua").innerHTML=" Béo phì độ III";
                        }
    }