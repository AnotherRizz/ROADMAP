
// MENAMPILKAN ISI ARRAY

        // var arr =["kiki" ,"lathifah","roikhanah","japana"];

        // for (var i = 0 ; i < arr.length ; i++){
        //     console.log('mahasiswa ke '+(i+1)+':'+ arr[i])
        // }

// METHOD PADA ARRAY
// .LENGTH = UNTUK MENGETAHUI PANJANG ARRAY
// .JOIN = UNTUK MENGGABUNGKAN ARRAY DAN MERUBAH JADI STRING
// 1. console.log (arr.join())
// 2. arr.push("tambahan array");
// 3. arr.pop(); menghapus elemen terakhir pada array
// 4. arr.unshift("ani"); menambah elemen pertama
// 5. arr.shift(); menghapus elemen pertama
// 6 .splice (indexawal , yg mau di hapus, elemen baru boleh lebih dari 1)
// arr.splice(1,0,"fatin","ibuk");
// 7. slice (awal , akhir)
// var arr1 = arr.slice(1,4)
// var arr =["kiki" ,"lathifah","roikhanah","japana","fatin","budi"];

// var nama =["kiki" ,"lathifah","roikhanah","japana","fatin","budi"];
// nama.forEach(function(e,i){
//     console.log("mahasiswa ke- "+ (i+1) + " adalah " + e)
// });


// 8. MAP
//  var angka =[1,2,3,4,5,6,7,];
//  var angka2= angka.map(function(e){
//     return e *2;
//  });
//  console.log(angka.join('-'));

// 9.sort (mengurutkan ) 

var angka =[1,4,6,7,3,4,9];
var nama =["ani","budi","dela","cahya"]
nama.sort();
console.log(nama.join('-'));


