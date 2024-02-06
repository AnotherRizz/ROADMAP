var nama = prompt('masukan nama sbg berikut : \n( cth : kiki , tifah, fahri,ayu,fiko,nini)');

switch(nama){
    case 'kiki':
    case 'fahri':
    case 'fiko' :
        alert('itu laki laki');
        break;
        case 'tifah':
        case 'ayu':
        case 'nini':
            alert('itu perempuan');
            break;
            default:
                alert('anda salah ');

}