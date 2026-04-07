import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("PokemonCard", () => {
  it("renders pokemon name", () => {
    render(
      <PokemonCard
        id={1}
        name="bulbasaur"
        image="test.png"
        types={[
          { 
            slot: 1,
            type: { 
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            } 
          }
        ]}
        baseExperience={64}
      />
    );

    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  });

  it("renders pokemon ID with proper formatting", () => {
    render(
      <PokemonCard
        id={1}
        name="bulbasaur"
        image="test.png"
        types={[
          { 
            slot: 1,
            type: { 
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            } 
          }
        ]}
        baseExperience={64}
      />
    );
    
    expect(screen.getByText("#001")).toBeInTheDocument();
  });
  
  it("renders all pokemon types as badges", () => {
    render(
      <PokemonCard
        id={1}
        name="bulbasaur"
        image="test.png"
        types={[
          { 
            slot: 1,
            type: { 
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            } 
          },
          { 
            slot: 2,
            type: { 
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            } 
          }
        ]}
        baseExperience={64}
      />
    );

    expect(screen.getByText("grass")).toBeInTheDocument();
  });
});