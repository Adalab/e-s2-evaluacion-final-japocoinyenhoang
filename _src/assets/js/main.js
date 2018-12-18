'use strict';

const toSearch = document.getElementById('search__text');
const searchButton = document.querySelector('.search__btn');
const destination = document.querySelector('.result__list');

//array donde vamos a guardar los favoritos
let savedSeries=[];

// funcion para buscar las series
function search() {
  fetch(`http://api.tvmaze.com/search/shows?q=${toSearch.value}`)
    .then(res => res.json())
    .then(data => {
      destination.innerHTML='';
      console.log(data);
      for (let serie of data) {
        let finalImage;
        if (serie.show.image){
          if (serie.show.image.medium){
            finalImage=serie.show.image.medium;
          }
        }else{
          finalImage='https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        }
        console.log (serie.show);
        destination.innerHTML += `
        <div class="result__item--container">
          <i class="favourite__icon fas fa-heart"></i>
          <li class="result__item nofavourite__item" data-id="${serie.show.id}">
            <img class="result__item--image" src="${finalImage}" alt="${serie.show.name}">
            <p class="result__item--title">${serie.show.name}</p>
          </li>
        </div>`;

        //almacenar la información de favoritos en el localStorage.
        const saveLocalStorage = () => {

          localStorage.setItem('lovedSeries', JSON.stringify(savedSeries));
          savedSeries = JSON.parse(localStorage.getItem('lovedSeries'));
          // si el array de favoritos esta vacio:
          if (savedSeries === null) {
            // iniciamelo con uno vacio
            savedSeries = [];

          } else {
            let seriesList = document.querySelectorAll('result__item');
            // sino para cada elemento del array de favoritos, pintamelos en pantalla
            if (savedSeries.contains(parseInt(serie.show.id))) {
              seriesList.classList.add('favorite__item');
              seriesList.classList.remove('nofavourite__item');
            }
          }
        };
       saveLocalStorage();
        select();
      }
    });
}
searchButton.addEventListener('click', search);

function select(){
  // cuando pinchamos en el contenedor de la serie
  let seriesList=document.querySelectorAll('result__item');
  for (const item of seriesList) {
    // savedSeries.push();   //en el parametro, incluir lo que quiero que se mande al array, en este caso los favoritos
    savedSeries.push(item);
    return item;
  }
}
select.addEtventListener('click', addFavorite);






// Funcion favoritos  //mirarlo con lupa para entenderlo
function addFavorite(e) {
  const favoriteSerie = e.currentTarget;
  lovedSeries = parseInt(favoriteSerie.getAttribute('data-id'));
  favoriteSerie.classList.toggle('favorite__item');
  const resultItem = document.querySelector('.result__item');
  const resultItemId = resultItem.id;
  const favouriteId = parseInt(resultItemId).innerHTML;
  if (savedSeries.includes(favouriteId)) {
    savedSeries.splice(savedSeries.indexOf(favouriteId), 1);
  } else {
    // con el push le decimos que suba lo que hay en el parametro al array savedSeries
    savedSeries.push(favouriteId);
    addFavorite();
  }
  localStorage.setItem('series', JSON.stringify(savedSeries));

}











// const seriesList=document.querySelectorAll('result__item');

// cont addFavorite=(e)=>{
//   const serieItem=e.currentTarget;
//   serieItem.classList.toggle('favorite__item');
// };

// seriesList.addEventListener('click',addFavorite);


// incluimos un titulo en el header
const headerText=document.querySelector('.page__header');
headerText.innerHTML=`<h1 class="header__text">Buscador de series</h1>`;

// añadimos un placeholder y su valor en el input
toSearch.setAttribute('placeholder','buscador');

