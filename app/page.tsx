import { getPokemonDetails, getPokemonList } from "@/lib/api";
import PokemonCard from "./components/PokemonCard";
import { Pokemon } from "@/types";
import Pagination from "./components/Pagination";

interface HomeProp {
  searchParams: Promise<{page?: string}>
  
}
export default async function Home({searchParams,}:HomeProp) {
  const {page} = await searchParams
   const currentPage = Number(page) || 1
   const limit = 21;
  const pokeData = await getPokemonList(currentPage,limit)
  const detailedPokemon = await Promise.all(
    pokeData.results.map((p)=> {const id = p.url.split('/').filter(Boolean).pop();  return getPokemonDetails(Number(id))})
  )
  const totalPages = Math.ceil(pokeData.count /limit)
  
  return (
   <main className="w-full  flex flex-col justify-center items-center">
    <div className="w-full max-w-7xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
   
    {
      detailedPokemon.map((p: Pokemon)=>(
        <PokemonCard key={p.id} id={p.id} name={p.name} image={p.sprites.other["official-artwork"].front_default} types={p.types} baseExperience={p.base_experience}/>
      ))
    }
    </div>

    <Pagination currentPage={currentPage} totalPages={totalPages} />
   </main>
  );
}
