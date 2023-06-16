import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getPokemonList } from "../services/pokemonService";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    async function fetchData() {
      setPokemons(await getPokemonList());
    }

    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h1>Pokemons</h1>
          {pokemons &&
            pokemons.map((pokemon) => {
              return (
                <>
                  <Col>
                    <PokemonCard {...pokemon} />
                  </Col>
                </>
              );
            })}
          {!pokemons && (
            <>
              <p>No pokemon available.</p>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default PokemonList;
