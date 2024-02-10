const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function(){
    const parent = document.querySelector('section#b ul');
    const liBaru = document.createElement('li')
    const teks = document.createTextNode('item baru');

    liBaru.appendChild(teks);
    parent.appendChild(liBaru);
    // alert('ok');
});
