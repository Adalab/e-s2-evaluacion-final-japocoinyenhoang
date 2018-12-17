'use strict';

const toSearch = document.getElementById('search__text');
const searchButton = document.querySelector('.search__btn');
const destination = document.querySelector('.result__list');

function search() {
  fetch(`http://api.tvmaze.com/search/shows?q=${toSearch.value}`)

    .then(res => res.json())
    .then(data => {
      destination.innerHTML='';

      for (let c of data) {
        let finalImage;
        if (c.show.image){
          if (c.show.image.medium){
            finalImage=c.show.image.medium;
          }
        }else{
          finalImage='https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        }
        destination.innerHTML+=`<div class="result__element--container"><li class="result__element">
      <img class="result__element--image" src="${finalImage}" alt="">
      <p class="result__element--title">${c.show.name}</p>
      </li></div>`;
      }
    });
}
searchButton.addEventListener('click', search);

