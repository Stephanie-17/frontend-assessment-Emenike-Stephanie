import { getPokemonDetails, getPokemonList } from "@/lib/api";
import PokemonCard from "./components/PokemonCard";
import { Pokemon } from "@/types";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

interface HomeProp {
	searchParams: Promise<{ page?: string; search?: string }>;
}
export default async function Home({ searchParams }: HomeProp) {
	const { page, search } = await searchParams;
	const currentPage = Number(page) || 1;
	const limit = 21;
	const pokeData = await getPokemonList(currentPage, limit);
	const detailedPokemon = await Promise.all(
		pokeData.results.map((p) => {
			const id = p.url.split("/").filter(Boolean).pop();
			return getPokemonDetails(Number(id));
		}),
	);

	const filteredPokemon = search
		? detailedPokemon.filter((p) =>
				p.name.toLowerCase().includes(search.toLowerCase()),
			)
		: detailedPokemon;

	const totalPages = Math.ceil(pokeData.count / limit);

	return (
		<main className="w-full  flex flex-col justify-center items-center">
			<SearchBar />
			<div className="w-full max-w-7xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
				{filteredPokemon.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-20 text-center">
						<p className="text-lg font-medium text-gray-700">
							No Pokémon found
						</p>
						<p className="text-sm text-gray-400 mt-1">
							Try a different name or clear your search
						</p>
					</div>
				) : (
					filteredPokemon.map((p: Pokemon) => (
						<PokemonCard
							key={p.id}
							id={p.id}
							name={p.name}
							image={p.sprites.other["official-artwork"].front_default}
							types={p.types}
							baseExperience={p.base_experience}
						/>
					))
				)}
			</div>

			<Pagination currentPage={currentPage} totalPages={totalPages} />
		</main>
	);
}
