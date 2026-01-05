const buscador = document.getElementById("buscador");

const pokemons = document.querySelectorAll(".pokemon");

buscador.addEventListener("input", () => {

    const textoBusqueda = buscador.value.toLowerCase();

    pokemons.forEach(pokemon => {

        const nombre = pokemon.querySelector("span").textContent.toLowerCase();

        if (nombre.includes(textoBusqueda)) {

            pokemon.style.display = "flex";

        } else {

            pokemon.style.display = "none";

        }

    });

});