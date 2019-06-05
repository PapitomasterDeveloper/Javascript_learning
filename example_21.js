async function getUser(user) {
	try{
		let url = `https://api.github.com/users/${user}`;
		let response = await $.getJSON(url);
		console.log(`${response.name}: ${response.bio}`);
	} catch(e) {
		console.log("User does not exist!");
	}
}

console.log(getUser('PapitomasterDeveloper'));
