function solicitudAJAX() {
    var url = "https://pokeapi.co/api/v2/pokemon/";
    let tarjetas = document.querySelector("#nPokemon");
    var objXMLHttpRequest = new XMLHttpRequest();
  
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          console.dir(json);

          
          tarjetas.data = json;
          for (let i = 0; i < json.results.length; i++) {
            buscarPorURL(json.results[i].url);
          }
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  }
  
  function buscarPorURL(urlPokemon) {
    var objXMLHttpRequest = new XMLHttpRequest();
    
  
    objXMLHttpRequest.onreadystatechange = function () {
      let div = document.querySelector("#ConteinerCard");
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;
  
          let html =
  `<div class="card" style="width: 18rem;">
    <img src="` + uriImg + `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` + nombre + `</h5>
      <p class="card-text"></p>
    </div>
  </div>`;
          div.innerHTML =html;
          console.log(div);
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };

    
    objXMLHttpRequest.open("GET", urlPokemon);
    objXMLHttpRequest.send();
  }
  
function buscar() {
  let tarjetas = document.querySelector("#ConteinerCard");
  var data = document.querySelector("#nPokemon").data;
  var busqueda = document.querySelector("#nPokemon").value.toLowerCase();

  for (var i = 0; i < data.results.length; i++) {
    if (data.results[i].name == busqueda) {
      url = data.results[i].url;
    }
  }

    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState == 4) {
        if (objXMLHttpRequest.status == 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;
          let html =
  `<div class="card" style="width: 18rem;">
    <img src="` + uriImg + `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` + nombre + `</h5>
      <p class="card-text"></p>
    </div>
  </div>`;
          tarjetas.innerHTML = html;
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  }