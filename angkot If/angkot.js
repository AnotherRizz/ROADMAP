var jmlangkot = 10;
var angkotber=6;

for(var noangkot=1; noangkot <= jmlangkot; noangkot++ )

if(noangkot<=6 && noangkot !==5){
    console.log('angkot no.'+noangkot +'sedang beroperasi')
}else if(noangkot===8 || noangkot===10 || noangkot===5){
    console.log('angkot no.'+noangkot+'sedang lembur')
}else{
    console.log('angkot no.'+noangkot+'sedang rusak')
}

