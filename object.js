// membuat object literal

var mhs_ = [
    nama = 'risqi',
    nim = '19221209',
    kelas =' 4a'
];

// function declaration

// function buatObjectMhs(nama,nim,kelas){
//     var  mhs ={};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.kelas = kelas;
//     return mhs;

// }

// var mhs1 = buatObjectMhs('kiki','19221209','4b')

// consturctor

function Mahasiswa (nama,nim ,kelas ,jurusan){
    this.nama = nama;
    this.nim = nim;
    this.kelas =kelas;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa ('lathifah' ,'19221209','3B','managemen')