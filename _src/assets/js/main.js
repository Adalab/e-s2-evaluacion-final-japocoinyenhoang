'use strict';

const toSearch = document.getElementById('search__text');
const searchButton = document.querySelector('.search__btn');
const destination = document.querySelector('.result__list');
const resultItemNumber= document.querySelector('.result__lengh');


//array donde vamos a guardar los favoritos
let savedSeries = [];

// funcion para buscar las series
function search() {
  fetch(`http://api.tvmaze.com/search/shows?q=${toSearch.value}`)
    .then(res => res.json())
    .then(data => {
      destination.innerHTML = '';
      resultItemNumber.innerHTML=`El número de series encontradas es : ${data.length}`;

      for (let serie of data) {
        let finalImage;
        if (serie.show.image) {
          if (serie.show.image.medium) {
            finalImage = serie.show.image.medium;
          }
        } else {
          finalImage = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        }
        destination.innerHTML += `
        <div class="result__item--container">
          <i class="favourite__icon fas fa-heart"></i>
          <li class="result__item nofavourite__item" data-id="${serie.show.id}">
            <img class="result__item--image" src="${finalImage}" alt="${serie.show.name}">
            <p class="result__item--title">${serie.show.name}</p><p class ="result__gen">${serie.show.genres}</p>
          </li>
        </div>`;

        //consultamos que no este ya en favoritos,
        const getSeriesData = () => {
          let seriesList = localStorage.getItem('saveLocalStorage');
          let saved = JSON.parse(localStorage.getItem('lovedSeries'));
          // si el array de favoritos esta vacio:
          if (seriesList === null) {
            // iniciamelo con uno vacio
            savedSeries = [];
          } else {
            let seriesList = document.querySelectorAll('result__item');
            savedSeries = JSON.parse(seriesList);
            let changeID = (parseInt(serie.show.id));
            // sino para cada elemento del array de favoritos, pintamelos en pantalla
            if (savedSeries.includes(changeID) === true) {
              seriesList.classList.add('favorite__item');
              seriesList.classList.remove('nofavourite__item');
            }
          }
          return savedSeries;
        };
        getSeriesData();


        //llamamos a la funcionde guardar en localStorage
        saveLocalStorage(serie);
      }
    });
}
searchButton.addEventListener('click', search);

function hr() {
  if (destination.classList.contains('hidden')) {
    destination.classList.remove('hidden');

  } else {
    destination.classList.add('hidden');

  }
}
resultItemNumber.addEventListener('click', hr);






//cada vez que le damos a favorito almacenamos los datos de favoritos en localstorage
// //almacenar la información de favoritos en el localStorage.

const saveLocalStorage = (serie) => {
  localStorage.setItem('lovedSeries', JSON.stringify(serie));
};



// Funcion favoritos  //mirarlo con lupa para entenderlo
const addFavorite = (e) => {
  const serieItem = e.currentTarget;
  serieItem.classList.toggle('favorite__item');
  const resultItem = document.querySelector('.result__item');
  const resultItemId = resultItem.id;
  const favouriteId = parseInt(resultItemId).innerHTML;
  if (savedSeries.includes(favouriteId)) {
    savedSeries.splice(savedSeries.indexOf(favouriteId)+1);
  } else {
    // con el push le decimos que suba lo que hay en el parametro al array savedSeries
    savedSeries.push(favouriteId);
    addFavorite();
  }
  localStorage.setItem('series', JSON.stringify(savedSeries));

};


// incluimos un titulo en el header
const headerText = document.querySelector('.page__header');
headerText.innerHTML = `<h1 class="header__text">Buscador de series</h1>`;

// añadimos un placeholder y su valor en el input
toSearch.setAttribute('placeholder', 'buscador');



