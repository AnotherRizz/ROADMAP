var jmlAngkot = 10 ;
var angkoberoperasi = 6 ;

for( var angkot =1 ;  angkot <= jmlAngkot; angkot++)

if( angkot <= angkoberoperasi && angkot !== 5){
    console.log ('angkot No.' + angkot + ' beroperasi dengan baik')
    
}else if(angkot === 5  || angkot === 8 || angkot === jmlAngkot){
    console.log ('angkot No.' + angkot + ' sedang lembur')
}

else{
    console.log ('angkot No.' + angkot + ' sedang rusak')

}