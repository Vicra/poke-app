import { getPokemonData } from "../services/pokemonService";
import { useEffect, useState } from "react";

const PokemonCard = (props) => {
  const [pokemon, setPokemonData] = useState({});
  console.log(pokemon);
  useEffect(() => {
    async function fetchData() {
      setPokemonData(await getPokemonData(props.url));
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {pokemon.id && (
        <div key={pokemon.id}>
          <h3>name: {pokemon.name}</h3>
          <p>height: {pokemon.height}</p>
          <img src={pokemon.sprites.front_default} />
        </div>
      )}
    </>
  );
};

export default PokemonCard;
