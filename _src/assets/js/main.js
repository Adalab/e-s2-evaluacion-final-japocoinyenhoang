'use strict';

const toSearch = document.getElementById('search__text');
const searchButton = document.querySelector('.search__btn');
const destination = document.querySelector('.result__list');
const headerText=document.querySelector('.page__header');
headerText.innerHTML=`<h1 class="header__text">Buscador de series</h1>`;
toSearch.setAttribute('placeholder','buscador');
function search() {
  fetch(`http://api.tvmaze.com/search/shows?q=${toSearch.value}`)

    .then(res => res.json())
    .then(data => {
      destination.innerHTML='';
      console.log(data);
      for (let c of data) {
        let finalImage;
        if (c.show.image){
          if (c.show.image.medium){
            finalImage=c.show.image.medium;
          }
        }else{
          finalImage='https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        }
        console.log (c.show);
        destination.innerHTML+=`<div class="result__item--container"><li class="result__item id="${c.show.id}">
      <img class="result__item--image" src="${finalImage}" alt="${c.show.name}">
      <p class="result__item--title">${c.show.name}</p>
      </li></div>`;

      }
    });
}
searchButton.addEventListener('click', search);
// const seriesList=document.querySelectorAll('result__item');

// cont addFavorite=(e)=>{
//   const serieItem=e.currentTarget;
//   serieItem.classList.toggle('favorite__item');
// };

// seriesList.addEventListener('click',addFavorite);

