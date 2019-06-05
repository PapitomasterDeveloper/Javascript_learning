async function catchSomePokemons() {
	let baseURL = "https://pokeapi.co/api/v2/pokemon";
	let pokemons = await Promise.all([
		$.getJSON(`${baseURL}/1/`),
		$.getJSON(`${baseURL}/2/`),
		$.getJSON(`${baseURL}/3/`)
	]);

	console.log(`The first pokemon is ${pokemons[0].name}`);
	console.log(`The second pokemon is ${pokemons[1].name}`);
	console.log(`The third pokemon is ${pokemons[2].name}`);
}

catchSomePokemons();
