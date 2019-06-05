let starWars = {
	genre: 'sci-fi',
	async logMovieData() {
		let url = "https://swapi.co/api/films/";
		let movieData = await $.getJSON(url);
		console.log(movieData.results);
	}
};

console.log(starWars.logMovieData());
