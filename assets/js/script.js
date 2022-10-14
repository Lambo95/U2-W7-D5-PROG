// //1 Al caricamento della pagina faccio una fetch all'API
// window.onload = async function getFetchAll() {
//   //2 creo una variabile che contega la rispota dell'api
//   let fetchRequest = await fetch("https://www.breakingbadapi.com/api/characters"); //qui ho un "oggetto" html

//   console.log(fetchRequest);
//   //essendo la risposta in json la devo far "interpretare"
//   let response = await fetchRequest.json(); //ora ho un file json
//   console.log(response);
//   //3 La mostro a schermo
//   fetchDisplay(response);
// };

//dato che non funziona la ricerca scompongo lo onload in funzioni separate

window.onload = function () {
  getFetchAll(); //1 Al caricamento della pagina faccio una fetch all'API
};

async function getFetchAll() {
  //2 creo una variabile che contega la rispota dell'api
  let fetchRequest = await fetch("https://www.breakingbadapi.com/api/characters"); //qui ho un "oggetto" html

  console.log(fetchRequest);
  //essendo che mi serve una risposta in json la devo far "interpretare"
  let response = await fetchRequest.json(); //ora ho un file json
  console.log(response);
  //3 La mostro a schermo
  fetchDisplay(response);
}

//4 funzione di ricerca
async function searchName() {
  // prendo la search bar
  let searchBar = document.querySelector("#search-bar");
  let name = searchBar.value;
  let nameValue = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
  let result = await nameValue.json();
  fetchDisplay(result);
}

//3 La mostro a schermo
function fetchDisplay(response) {
  //prendo la fetch request e la stampo sul container
  let display = document.querySelector(".container > .row");
  //svuoto il contetnuto per la funzione di ricerca che implementerò
  display.innerHTML = "";
  console.log(response);
  for (const res of response) {
    display.innerHTML += `<div class="card card-sm mx-auto my-2" style="width: 18rem;">
             <img src="${res.img}" class="card-img-top">
            <div class="card-body">
                <h5>Name: ${res.portrayed}</h5>
                <p>Actor Name: ${res.name}</p>
                <p>Nickname: ${res.nickname}</p>
                <p>Birthday: ${res.birthday}</p>
                <p>Status: ${res.status}</p>
            </div></div>`;
  }
}
