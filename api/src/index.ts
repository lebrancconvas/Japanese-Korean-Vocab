import Axios from 'axios';

const DataPokemon = async () => {
	try {
		const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
		console.log(response.data);
	} catch (err) {
		console.log(err);
	}
}

DataPokemon();