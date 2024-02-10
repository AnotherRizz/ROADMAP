//  const h1 = document.getElementById('judul');
//   h1.innerHTML= 'Risqi Japana';

//   const judul = document.querySelector('#judul');

//   judul.style.color = 'lightblue';
//   judul.style.backgroundColor = 'grey';

//   const p = document.querySelectorAll('#a p')[2];
//   p.style.color = 'red';

//   const p1 = document.querySelectorAll('#b ul li');

//   for (let i = 0; i< p1.length ; i++){
//     p1[i].style.color = 'purple';
//   }


// classList

// const p2 = document.querySelector('.p');
// p2.classList.add('label');


//manipulasi NODE
// buat element baru

const pBaru = document.createElement('p');
const textPB = document.createTextNode('paragraf Baru');
// simpan keduanya 
pBaru.appendChild(textPB);
// simpan p baru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// tambah button
const btn = document.createElement('button');
const txtBtn = document.createTextNode('Mulai');

btn.appendChild(txtBtn);
sectionA.appendChild(btn);


// insert di tengah
const itemBaru = document.createElement('li');
const textLi = document.createTextNode('Item baru');

itemBaru.appendChild(textLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(itemBaru,li2);

// remove

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

// replace

const sectionB=document.getElementById('b');
const p4 = sectionB.querySelector('p');


const h2Baru = document.createElement('h2');
const textBaru= document.createTextNode('Judul baru');

h2Baru.appendChild(textBaru);

sectionB.replaceChild(h2Baru,p4);