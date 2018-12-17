'use strict';

const toSearch = document.getElementById('search__text');
const searchButton = document.querySelector('.search__btn');
const destination = document.querySelector('.result__list');

// const searching =event =>{
//   const seachField = event.currentTarget;
//   paco = searchField.value;
// }


function search() {
  fetch(`http://api.tvmaze.com/search/shows?q=${toSearch.value}`)

    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // console.log(data.show);

      for (let c of data) {
        destination.innerHTML+=`<div class="result__element--container"><li class="result__element">
      <img class="result__element--image" src="${c.show.image.medium}" alt="">
      <p class="result__element--title">${c.show.name}</p>
      </li></div>`;
        // console.log(c.show);
        // console.log(c.show.name);
        // console.log (c.show.image);
        // console.log(c.show.image.medium);


        // console.log(c.image);
        // console.log(c.name.value);
      }
    });
}
searchButton.addEventListener('click', search);
      // }
      //   `;




// .then(function(data){
//     if(select.value === "people"){
//         for (let i = 0; i < data.results.length; i++){
//             const dataName = data.results[i].name;
//             const dataFilms = data.results[i].films;
// }

// // .addEventListener('click',search);
// toSearch.addEventListener('click', search);
