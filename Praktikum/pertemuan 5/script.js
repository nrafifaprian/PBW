function hitung() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let hasil = parseInt(num1) + parseInt(num2);
    document.getElementById("hasil").innerText = hasil;
  }