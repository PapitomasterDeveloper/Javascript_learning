async function getStarWarsData() {
	console.log("starting!");
	let movieData = await $.getJSON("https://swapi.co/api/films/");
	console.log("all done!");
	console.log(movieData);
}

console.log(getStarWarsData());
