var dd1, mm1, yy1, dd2, mm2, yy2, a, totalHari1, totalHari2, total,
  dd1 = document.getElementById('dd1'),
  mm1 = document.getElementById('mm1'),
  yy1 = document.getElementById('yy1'),
  dd2 = document.getElementById('dd2'),
  mm2 = document.getElementById('mm2'),
  yy2 = document.getElementById('yy2'),
  btn = document.getElementById('btn'),
  result = document.getElementById('result');

btn.addEventListener('click', function () {
  dd1 = Number(dd1.value);
  mm1 = Number(mm1.value);
  yy1 = Number(yy1.value);
  dd2 = Number(dd2.value);
  mm2 = Number(mm2.value);
  yy2 = Number(yy2.value);
  if (((yy1 % 4 === 0) && (yy1 % 100 !== 0)) || (yy1 % 400 === 0)) {
    yy1 = yy1 * 366;
    if (mm1 === 2) {
      mm1 = mm1 * 29;
    } else if (mm1 === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
      mm1 = mm1 * 31;
    } else {
      mm1 = mm1 * 30;
    }
  } else {
    yy1 = yy1 * 365;
  }


  if (((yy2 % 4 === 0) && (yy2 % 100 !== 0)) || (yy2 % 400 === 0)) {
    yy2 = yy2 * 366;
    if (mm2 === 2) {
      mm2 = mm2 * 29;
    } else if (mm2 === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
      mm2 = mm2 * 31;
    } else {
      mm2 = mm2 * 30;
    }
  } else {
    yy2 = yy2 * 365;
  }

  totalHari1 = yy1 + mm1 + dd1;
  totalHari2 = yy2 + mm2 + dd2;
  total = totalHari1 - totalHari2;
  // total_hari1 = Number((yy1 * 365) + (mm1 * 30) + dd1);
  // total_hari2 = Number((yy2 * 365) + (mm2 * 30) + dd2);
  // if (total_hari2 > total_hari1) {
  //   total = Number(total_hari2) - Number(total_hari1);
  //   yy3 = Math.floor(total / 365); // tahun
  //   a = total - (yy3 * 365);
  //   mm3 = Math.floor(a / 30); // bulan
  //   dd3 = total - ((yy3 * 365) + (mm3 * 30));
  result.innerHTML = total;

  // result.innerHTML = yy3 + " Tahun <br>" + mm3 + " Bulan <br>" + dd3 + " Hari ";
});