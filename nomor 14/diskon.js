// ========================= menentukan variabel ====================================== 
var a, b, c, jumlahTotal1, x, y, z, kotaBerangkat, jumlahTotal2, jumlahTotAk, kotaTujuan, nama, tiket, diskon, bayarTiket,
    kotaB = document.getElementById("kota"),
    kotaT = document.getElementById("tujuan"),
    namanya = document.getElementById("nama"),
    tanggal = document.getElementById("tanggal"),
    bulan = document.getElementById("bulan"),
    tahun = document.getElementById("tahun"),
    tanggal2 = document.getElementById("tanggal2"),
    bulan2 = document.getElementById("bulan2"),
    tahun2 = document.getElementById("tahun2"),
    tiket = document.getElementById("tiket"),
    btn = document.getElementById("btn"),
    result = document.getElementById("result");
// ========================== menentukan value inputan ==================================
btn.addEventListener("click", function () {
    a = Number(tanggal.value);
    b = Number(bulan.value);
    c = Number(tahun.value);
    x = Number(tanggal2.value);
    y = Number(bulan2.value);
    z = Number(tahun2.value);
    kotaBerangkat = kotaB.value;
    kotaTujuan = kotaT.value;
    nama = namanya.value;
    tiket = tiket.value;

    // ======================== menentukan jumlah tahun  pertama ======================= 
    var jumlahTahun = 0;
    for (i = 1; i <= c; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            jumlahTahun = jumlahTahun + 366;
        } else {
            jumlahTahun = jumlahTahun + 365;
        }
    }
    // ======================== menentukan jumlah tahun  kedua ======================= 
    var JumlahTahun2 = 0;
    for (i = 1; i <= z; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            JumlahTahun2 = JumlahTahun2 + 366;
        } else {
            JumlahTahun2 = JumlahTahun2 + 365;
        }
    }
    // ============================ menentukan jumlah bulan pertama ================ 
    var jumlahBulan = 0;
    for (i = 1; i <= b; i++) {
        if ((i === 1) || (i === 3) || (i === 5) || (i === 7) || (i === 8) || (i === 10) || (i === 12)) {
            jumlahBulan = jumlahBulan + 31;
        } else if ((i === 4) || (i === 6) || (i === 9) || (i === 11)) {
            jumlahBulan = jumlahBulan + 30;
        } else if (i === 2) {
            if ((c % 4 === 0 && c % 100 !== 0) || (c % 400 === 0)) {
                jumlahBulan = jumlahBulan + 29;
            } else {
                jumlahBulan = jumlahBulan + 28;
            }
        }
    }

    // ============================ menentukan jumlah bulan Kedua ============  
    var JumlahBulan2 = 0;
    for (j = 1; j <= y; j++) {
        if ((j === 1) || (j === 3) || (j === 5) || (j === 7) || (j === 8) || (j === 10) || (j === 12)) {
            JumlahBulan2 = JumlahBulan2 + 31;
        } else if ((j === 4) || (j === 6) || (j === 9) || (j === 11)) {
            JumlahBulan2 = JumlahBulan2 + 30;
        } else if (j === 2) {
            if ((z % 4 === 0 && z % 100 !== 0) || (z % 400 === 0)) {
                JumlahBulan2 = JumlahBulan2 + 29;
            } else {
                JumlahBulan2 = JumlahBulan2 + 28;
            }
        }
    }

    // ========================== menentukan jumlah total hari pertama ====================
    jumlahTotal1 = jumlahTahun + jumlahBulan + a;
    // ============================ menentukan jumlah total hari kedua =================
    jumlahTotal2 = JumlahTahun2 + JumlahBulan2 + x;
    // ============================= menentukan jumlah total akhir 
    jumlahTotAk = jumlahTotal2 - jumlahTotal1;
    if (jumlahTotAk <= 9125) {
        diskon = 0.2 * tiket;
    } else {
        diskon = 0;
    }

    bayarTiket = tiket - diskon;
    // result.innerHTML = "Jumlah Tahun  pertama " + jumlahTahun + "  <br> Jumlah Bulan pertama " + jumlahBulan + "<br> Jumlah Hari pertama" + a + "<br> Jumlah Total Hari Pertama " + jumlahTotal1 + "<br> Jumlah Tahun Kedua " + JumlahTahun2 + "<br> Jumlah Bulan Kedua " + JumlahBulan2 + "<br> Jumlah Hari Kedua " + x + "<br> Jumlah Total Hari Kedua " + jumlahTotal2 + "<br> Jumlah selisih Hari " + jumlahTotAk;
    result.innerHTML = "Kota Keberangkatan : " + kotaBerangkat + "<br><br> Kota Tujuan : " + kotaTujuan + " <br><br> Nama : " + nama + "<br><br>Tanggal Lahir : " + a + " - " + b + " - " + c + "<br><br> Tanggal Berangkat : " + x + " - " + y + " - " + z + " <br><br> Harga Tiket : " + tiket + "<br><br>Diskon " + diskon + " <br><br> Bayar Tiket " + bayarTiket;
});