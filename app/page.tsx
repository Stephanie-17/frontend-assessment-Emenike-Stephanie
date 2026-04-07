import { getPokemonDetails, getPokemonList, getPokemonTypes } from "@/lib/api";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "@/types";
import Pagination from "../features/Pagination";
import SearchBar from "../features/SearchBar";
import TypeFilter from "../features/TypeFilter";
import EmptyState from "../components/EmptyState";

interface HomeProp {
	searchParams: Promise<{ page?: string; search?: string; type?: string }>;
}
export default async function Home({ searchParams }: HomeProp) {
	const { page, search, type } = await searchParams;
	const currentPage = Number(page) || 1;
	const limit = 21;
	const pokeData = await getPokemonList(currentPage, limit);
	const types = await getPokemonTypes();
	const detailedPokemon = await Promise.all(
		pokeData.results.map((p) => {
			const id = p.url.split("/").filter(Boolean).pop();
			return getPokemonDetails(Number(id));
		}),
	);

	const filteredPokemon = detailedPokemon
		.filter((p) =>
			search ? p.name.toLowerCase().includes(search.toLowerCase()) : true,
		)
		.filter((p) => (type ? p.types.some((t) => t.type.name === type) : true));

	const totalPages = Math.ceil(pokeData.count / limit);

	return (
		<main className="w-full  flex flex-col justify-center items-center">
			<div className="w-full flex items-center mb-9 gap-5 justify-center">
				<SearchBar />
				<TypeFilter types={types} />
			</div>

			{filteredPokemon.length === 0 ? (
				<EmptyState />
			) : (
				<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
					{filteredPokemon.map((p: Pokemon, index) => (
						<PokemonCard
							key={p.id}
							id={p.id}
							name={p.name}
							image={p.sprites.other["official-artwork"].front_default}
							types={p.types}
							baseExperience={p.base_experience}
							priority={index < 3}
						/>
					))}
				</div>
			)}

			<Pagination currentPage={currentPage} totalPages={totalPages} />
		</main>
	);
}
