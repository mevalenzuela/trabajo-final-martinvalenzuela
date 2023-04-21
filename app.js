// fetch => funcion nativa de js, que nos permite realizar peticiones HTTP de froma asincrónica.

//Promesas 
fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
// de JSON a dato manipulable (objeto o array)
        return response.json();
    })
    .then((data) => {
//        console.log(data);
        const personajes = data.results;
        const cantidad = data.results.length;

//        console.log(personajes[0]);
        
        const $contenedor = document.getElementById("contenedor-personajes");
//        for (let i = 0; i < personajes.lenght; i++) {
        for (let i = 0; i < cantidad; i++) {
//            console.log(personajes[i].name);
            $contenedor.innerHTML += `
            <div class="tarjeta">
                <img src="${personajes[i].image}">
                <h3 class="nombre-personaje">${personajes[i].name}</h3>
                <p>${personajes[i].gender}</p>
                <p>${personajes[i].species}</p>
                <p>${personajes[i].status}</p>
            </div>
            `;
      }
    });
    
