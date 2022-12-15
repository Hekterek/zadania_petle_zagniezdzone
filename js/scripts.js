"use strict";

const names = [`Piotr`, `Karol`, `Milena`, `Dawid`, `Oliwia`, `Oskar`, `Marzena`, `Patrycja`, `Hubert`, `Ania`];

let listNames = `<ol>`;

names.forEach((element) => {
   listNames += `<li>${element}</li>`;
});
listNames += `</ol>`;

const codeNames = document.querySelector(`#names`);

codeNames.innerHTML = listNames;

//////////////////////////////////////////////////////////////////////////////

let num = ``;

for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 1; j++) {
      num += `1 2 3 4 5`;
   }
   num += `\n`;
}

console.log(num);

/////////////////////////////////////////////////////////////////////////////

let stars = `*`;
let listStars = `<ul>`;

for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 1; j++) {
      listStars += `<li>${stars}</li>`;
   }
   stars += `*`;
}
listStars += `</ul>`;

const codeStars = document.querySelector(`#stars`);

codeStars.innerHTML = listStars;

///////////////////////////////////////////////////////////////////////////

stars = `*****`;
listStars = `<ul>`;
for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 1; j++) {
      listStars += `<li>${stars}</li>`;
   }
   stars = stars.slice(0, -1);
}
listStars += `</ul>`;

const codeStars2 = document.querySelector(`#stars2`);

codeStars2.innerHTML = listStars;
