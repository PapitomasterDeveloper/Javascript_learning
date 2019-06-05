async function catchSomePokemons() {
	let baseURL = "https://pokeapi.co/api/v2/pokemon";
	let p1 = await $.getJSON(`${baseURL}/1/`);
	let p2 = await $.getJSON(`${baseURL}/2/`);
	let p3 = await $.getJSON(`${baseURL}/3/`);

	console.log(`The first pokemon is ${p1.name}`);
	console.log(`The second pokemon is ${p2.name}`);
	console.log(`The third pokemon is ${p3.name}`);
}

catchSomePokemons();
