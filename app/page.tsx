import { getPokemonList } from "@/lib/api";
import PokemonCard from "./components/PokemonCard";
import { Pokemon } from "@/types";

export default async function Home() {

  const pokeData = await getPokemonList(1,21)
  const detailedPokemon = await Promise.all(
    pokeData.results.map((p)=> fetch(p.url).then(res => res.json()))
  )
  
  return (
   <main className="w-full  flex justify-center items-center">
    <div className="w-full max-w-7xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
   
    {
      detailedPokemon.map((p: Pokemon)=>(
        <PokemonCard key={p.id} id={p.id} name={p.name} image={p.sprites.other["official-artwork"].front_default} types={p.types} baseExperience={p.base_experience}/>
      ))
    }
    </div>
   </main>
  );
}
