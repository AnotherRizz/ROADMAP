//DOM selection
// 1 document.getElementById() -> element

// const judul = document.getElementById('judul');
//     judul.style.color= 'blue';
//     judul.style.backgroundColor = '#ccc';
//     judul.innerHTML=' Risqi Japana';


// 2//  document.getElementsByTagName() - HTMLCollection

// const p = document.getElementsByTagName('p');
//  for( let i = 0 ; i < p.length ; i ++){

//      p[i].style.backgroundColor = 'lightblue';
//  }


// 3 //   document.getElementsByClassName() - HTMLCollection
// const p1 =    document.getElementsByClassName('p1')[0];
//  p1.innerHTML = 'ini diubah dari javascript'


// 4  document.querySelector() => element

const p4 = document.querySelector('#b p');

p4.style.color= 'green';

const li2 =document.querySelector( '#b  li:nth-child(2)');
li2.style.backgroundColor ='orange';

//  5 . document.querySelectorAll() -> nodelist

 const p = document.querySelectorAll('p');

 for (let i = 0 ; i < p.length; i++){

     p[i].style.backgroundColor = 'lightblue';
 }