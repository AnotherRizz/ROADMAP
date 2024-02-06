var tanya = true;
while( tanya ){



// pilihan player

var p = prompt( 'pilih : batu , gunting , kertas');

// piliham komputer
var  k = Math.random();


if ( k < 0.34){
    k = 'batu';
} else if( k  < 0.67){
    k = 'gunting';
}else{
    k = 'kertas'
}

// rules
 var hasil ='';

if (p == k){
    hasil ='SERI !'
}else if( p == 'batu' )
{
    // if( k == 'kertas'){
    //     hasil = 'ANDA MENANG !'
    // }else{
    //     hasil = 'ANDA KALAH !'
    // }
    hasil = ( k == 'kertas') ? 'ANDA KALAH' : 'ANDA MENANG'
}else if ( p  == 'gunting' ){
    hasil = (k == 'batu'  ) ?'ANDA KALAH' : 'ANDA MENANG'
}else if ( p  == 'kertas' ){
    hasil = (k ==  'gunting') ? 'ANDA KALAH ': 'ANDA MENANG'
}else{
    hasil= 'memasukan pilihan yang salah';
}

// hasil
alert ( 'Kamu memilih ' + p + ' dan Komputer memilih' + k + '\n maka hasilnya adalah : kamu '+ hasil);


tanya = confirm( 'MAU MAIN LAGI?');
}

alert ('TERIMAKASIH ')






// var tanya = true;
// while (tanya) {

//     // pilihan player
//     var p = prompt('pilih: batu, gunting, kertas');

//     // pilihan komputer
//     var k = Math.random();

//     if (k < 0.33) {
//         k = 'batu';
//     } else if (k < 0.67) {
//         k = 'gunting';
//     } else {
//         k = 'kertas';
//     }

//     // rules
//     var hasil = '';

//     if (p == k) {
//         hasil = 'SERI!'
//     } else if ((p == 'batu' && k == 'gunting') ||
//         (p == 'gunting' && k == 'kertas') ||
//         (p == 'kertas' && k == 'batu')) {
//         hasil = 'ANDA MENANG!'
//     } else {
//         hasil = 'ANDA KALAH!'
//     }

//     // hasil
//     alert('Kamu memilih ' + p + ' dan Komputer memilih ' + k + '\nMaka hasilnya adalah: kamu ' + hasil);

//     tanya = confirm('MAU MAIN LAGI?');
// }

// alert('TERIMAKASIH');
