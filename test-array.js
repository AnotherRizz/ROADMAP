var penumpang= ['riski',undefined,'japana'];

var tambahPenumpang =function (namaPenumpang, penumpang){
    // jika kursi kosong
    if(penumpang.length == 0){
        // masukan ke kursi pertama
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length;i++){
            // jika ada kursi kosong
            if( penumpang[i] == undefined){
                // tambah penumpamg dikursi tsb
                penumpang[i] = namaPenumpang;
                // kembalikan array
                return penumpang;
            }
            // jika ada nama yang sama
            else if( penumpang[i] == namaPenumpang){
                console.log (namaPenumpang + ' sudah ada di dalam angkot');
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if ( i == penumpang.length - 1){
                // tambahkan di akhir elemen
                penumpang.push(namaPenumpang);
                // kembalikan data array
                return penumpang;
            }

        }
    }
    
}