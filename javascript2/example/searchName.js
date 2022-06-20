let nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(pharams1, pharams2, cb) {

    const daftarNama = nama.filter((dn) => dn.toLowerCase().includes(pharams1))
        .slice(0, pharams2)
    return cb(daftarNama)
}

function useCallback(value) {
    console.log(value)
}

searchName("an", 3, useCallback)