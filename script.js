const cardBack = document.querySelector('.cardBack');
const pexesoDiv = document.getElementById('pexeso');
const cardBackArr = [];

function cloneCard (){
const cloneC = cardBack.cloneNode(true);
cloneC.setAttribute('class', 'cardBack');


//cloneCard.style.left = 'cardBack.';
   //pexesoDiv.appendChild(cloneCard);
   for(let i=0; i < 6;i++){
       cardBackArr.push(cloneC);
       let pos = Math.floor((Math.random() * 3) + 0);
console.log(pos)
cardBackArr[i].style.position = 'absolute';
//cardBackArr[i].style.grid
cardBackArr[i].style.border = '1px solid green';
cardBackArr[i].style.gridArea= `1/${pos}/1/${pos}`;
cardBack.after(cardBackArr[i]);

   }

}
console.log(cardBackArr);
cloneCard();
