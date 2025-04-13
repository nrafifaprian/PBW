function cekHurufMutu() {
    const nim = document.getElementById('nim').value;
    const nilai = parseFloat(document.getElementById('nilai').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        resultDiv.innerHTML = '<p class="error">Nilai tidak valid!</p>';
        return;
    }

    let hurufMutu;
    if (nilai >= 80) {
        hurufMutu = 'A';
    } else if (nilai >= 70) {
        hurufMutu = 'B';
    } else if (nilai >= 60) {
        hurufMutu = 'C';
    } else if (nilai >= 50) {
        hurufMutu = 'D';
    } else {
        hurufMutu = 'E';
    }

    resultDiv.innerHTML = `
        <p>
            NIM: ${nim}<br>
            Nilai: ${nilai}<br>
            Huruf Mutu: <span class="grade">${hurufMutu}</span>
        </p>
    `;
}