
// function jmlbilangan(a,b){
//     var total;
//     total = a * b ;
//     return total;
// }

function jmlVolumDuaKubus(a,b) {
    var volumA;
    var volumB;
    var total;

    volumA = a * a * a;
    volumB = b * b * b;

    total = volumA + volumB;


    return total;
}

alert (jmlVolumDuaKubus(8,3));

