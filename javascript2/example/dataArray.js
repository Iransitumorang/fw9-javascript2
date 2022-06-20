function dataArray(nilaiAwal, nilaiAkhir) {

    const data = [3, 4, 17, 7, 6, 16, 15, 8, 5, 9, 6, ];
    const newData = data.filter((d) => d > nilaiAwal && d < nilaiAkhir);

    if (newData.length < 5) {
        console.log(newData);
        console.log('Jumlah angka dalam Data Array harus lebih dari 5');
        // console.log(newData.sort((a, b) => a - b));
    } else {
        console.log(newData);
        console.log('Nilai Akhir harus lebih besar dari Nilai Awal');
    }
}

dataArray(5, 16);