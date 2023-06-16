import axios from "axios";

export async function getPokemonList() {
  try {
    const options = {
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/",
    };
    const response = await axios.request(options);
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
}

export async function getPokemonData(url) {
  try {
    const options = {
      method: "GET",
      url,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
