function dataArray(nilaiAwal, nilaiAkhir, isi) {

    const result = [];

    if (isi.length < 5) {
        return "Jumlah angka dalam Data Array harus lebih dari 5";
    } else if (nilaiAwal > nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari Nilai Awal";
    } else {
        for (x of isi) {
            if (x > nilaiAwal && x < nilaiAkhir) {
                result.push(x)
            }
        } if (result.length == 0) {
            return "Nilai tidak ditemukan";
        } else {
            return result.sort((a, b) => a - b);
        }
    }
};

console.log(dataArray(5, 20, [2, 25, 4, 14, 17, 30, 8]));