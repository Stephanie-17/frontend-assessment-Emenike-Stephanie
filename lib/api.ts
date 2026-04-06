import { Pokemon, PokemonListResponse, PokemonTypeResponse } from "@/types";

export const getPokemonList = async (page: number, limit: number): Promise<PokemonListResponse> => {
	const offset = (page - 1) * limit;

	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
		{ cache: "force-cache" },
	);

	if (!res.ok) {
		throw new Error("Failed to fetch Pokemons :(");
	}

	return res.json();
};

export const getPokemonDetails = async (id: number): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		cache: "force-cache",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch Pokemon details");
	}

	return res.json();
};

export const getPokemonTypes = async (): Promise<PokemonTypeResponse> => {
	const res = await fetch("https://pokeapi.co/api/v2/type", {cache: "force-cache"});
	if (!res.ok) {
		throw new Error("Failed to fetch types");
	}
	return res.json();
};
