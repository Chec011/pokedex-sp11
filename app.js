async function obtenerPokemon(){

    const resultado = document.getElementById("resultado");

    /* CARGA */
    resultado.innerHTML = "<p>Buscando...</p>";

    /* RANDOM */
    const id = Math.floor(Math.random() * 151) + 1;

    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datos = await respuesta.json();

    const tipo = datos.types[0].type.name;

    resultado.innerHTML = `
    <div class="pokemon-card ${tipo}">
        <h2>${datos.name}</h2>
        <img src="${datos.sprites.front_default}">
        <p>Tipo: ${tipo}</p>
        <p>Altura: ${datos.height}</p>
        <p>Peso: ${datos.weight}</p>
    </div>
    `;

}