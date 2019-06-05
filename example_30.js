let baseURL = "https://pokeapi.co/api/v2/pokemon";

let parsed = $.getJSON(`${baseURL}/1/`)
	.then(p1 => {
		console.log(`The first pokemon is ${p1.name}`);
		return $.getJSON(`${baseURL}/2/`);
	})
	.then(p2 => {
                console.log(`The first pokemon is ${p2.name}`);
                return $.getJSON(`${baseURL}/3/`);
        })
	.then(p3 => {
                console.log(`The first pokemon is ${p3.name}`);
                return $.getJSON(`${baseURL}/3/`);
        });
