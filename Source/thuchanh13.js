function tracuu(){
    let a = document.getElementById("nhapTen").value;
    a = a.toString();
    switch (a) {
            case "oi":
            case "Oi":
            case "Ổi":
            case "ổi":
                //document.getElementById("ketqua").innerHTML="20000 (VND/kg)";
                //break;
            case "dua hau":
            case "dưa hấu":
            case "Dưa Hấu":
                document.getElementById("ketqua").innerHTML="20000 (VND/kg)";
                break;
            case "tao":
            case "táo":
            case "Táo":
            case "Tao":
                //document.getElementById("ketqua").innerHTML="30000 (VND/kg)";
               // break;
            case "xoai":
            case "Xoài":
            case "xoài":
                document.getElementById("ketqua").innerHTML="30000 (VND/kg)";
                break;
            case "cam":
            case "Cam":
                //document.getElementById("ketqua").innerHTML="40000 (VND/kg)";
                //break;
            case "chom chom":
            case "Chôm Chôm":
            case "Chôm chôm":
                document.getElementById("ketqua").innerHTML="40000 (VND/kg)";
                break;
            case "mang cut":
            case "măng cụt":
            case "Măng Cụt":
                document.getElementById("ketqua").innerHTML="50000 (VND/kg)";
                break;
            default:
                document.getElementById("ketqua").innerHTML="vui lòng nhập lại";
                break;

    }
}