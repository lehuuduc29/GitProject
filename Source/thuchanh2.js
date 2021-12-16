
    //var inputchieuCao;
    //var inputchieuRong;
    let inputchieuCao = prompt("nhap vao chieu cao");
    let inputchieuRong = prompt("nhap vao chieu rong");  
    let chieuCao = parseInt(inputchieuCao);
    let chieuRong = parseInt(inputchieuRong);
    var dienTich;
    dienTich = chieuCao * chieuRong;
    document.write("Chiều cao: " + chieuCao);
    document.write("<br>");
    document.write("Chiều rộng: " + chieuRong);
    document.write("<br>");
    document.write("Diện tích là: " + dienTich);

