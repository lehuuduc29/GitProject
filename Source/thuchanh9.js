function convert() {
    let a = document.getElementById("amount").value;
    let b = document.getElementById("from_currency").value;
    let c = document.getElementById("to_currency").value;
    let result = a*c/b;
    document.getElementById("ketqua").innerHTML = (result);
}