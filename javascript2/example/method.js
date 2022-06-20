// 1.reduce() = Metode ini berfungsi untuk mengurangi elemen array menjadi single value dengan menjumlah setiap elemen (dari kiri ke kanan)
function useReduce() {
    const number = [5, 10, 15];
    console.log(number);
    const result = number.reduce((total, value) => total + value, 0);
    console.log(result ); 
}

useReduce(); // Output: 30
console.log(
    "================================================"
);

// 2.join() =  untuk menggabungkan elemen array menjadi sebuah string.
function useJoin(){
    const city = ["Jakarta", "Medan", "Manado", "Bandung"];
    console.log(city);
    const result = city.join(", ")
    return result;
}

console.log(useJoin());
console.log(
    "================================================"
);

// 3. slice() = untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal.
function useSlice() {
    const name = ['John D', 'Jack Brown', 'James K', 'JK Rowling']
    console.log(name);
    const result = name.slice(2);
    console.log(result);
}

useSlice();
console.log(
    "================================================"
);

// 4. splice() = method ’serba-bisa’ yang bisa digunakan untuk memotong array, menambahkan elemen array, bahkan melakukan keduanya sekaligus.
function useSplice() {
    const country = ['Indonesia', 'Singpore', 'China', 'Japan'];
    console.log(country);
    country.splice(2, 0, 'South Korea');
    return country;
}

console.log(useSplice());
console.log(
    "================================================"
);

// 5. pop() =  menghapus elemen terakhir dari array
function usePop() {
    const car = ['Lexus', 'Mazda', 'Hyundai', 'Wuling'];
    console.log(car);
    car.pop();
    return car;
}

console.log(usePop());
console.log(
    "================================================"
);

// 6. shift() = menghapus elemen paling awal array, dan menggeser ke bawah seluruh elemen lain di dalam Array.
function useShift() {
    const phone = ['Samsung', 'Iphone', 'Google', 'Oneplus'];
    console.log(phone);
    const phone2 = phone.shift();
    console.log('Yang di hapus : ',phone2);
    return phone;
}

console.log(useShift());
console.log(
    "================================================"
);

// 7. unshift() = menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada.
function useUnShift() {
    const island = ['Sumatera', 'Jawa', 'Sulawesi'];
    console.log(island);
    island.unshift('Papua', 'Kalimantan');
    return island;
}

console.log(useUnShift());
console.log(
    "================================================"
);

// 8. some() =  untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi.
function useSome() {
    const number = [1, 2, 3, 4, 5]
// mengecek apakah dalam array angka terdapat elemen yang habis dibagi 2
    const some = number.some(item => item % 2);
    console.log(some); // Output: true

// mengecek apakah dalam array angka terdapat elemen yang kurang dari 0
    const thing = number.some(item => item < 0);
    console.log(thing); // Output: false

}

useSome();
console.log(
    "================================================"
);

// 9. every() = untuk mengecek apakah setiap elemen dalam array memenuhi kondisi.
function useEvery() {
    const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// mengecek apakah semua elemen lebih dari 5
    const greaterFive = angka.every(item => item > 4);
    console.log(greaterFive); // Output: false

// mengecek apakah semua element kurang dari 10
    const lessTen = angka.every(item => item < 10);
    console.log(lessTen); // Output: true
}

useEvery();
console.log(
    "================================================"
);

// 10. reverse() = digunakan untuk membalikkan urutan dari elemen di dalam array.
function useReverse() {
    let number = [1, 2, 3, 4, 5]
        number.reverse()
        console.log(number) // hasil =  [ 5, 4, 3, 2, 1 ]
}

useReverse();
console.log(
    "================================================"
);
