

export async function generateMetadata({ params }: { params: { id: string } }) {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
		if (!res.ok) throw new Error("Failed to fetch");
		const pokemon = await res.json();

		return {
			title: `${pokemon.name} — PokéArchive`,
			description: `View details about ${pokemon.name}`,
			openGraph: {
				images: [pokemon.sprites.other["official-artwork"].front_default],
			},
		};
	} catch (error) {
		return {
			title: "Pokémon Not Found — PokéArchive",
			description: "Unable to load Pokémon details",
		};
	}
}

import BreadcrumbNav from "@/app/components/BreadcrumbNav";
import { getPokemonDetails } from "@/lib/api";
import React from "react";
import Image from "next/image";
import { Pokemon } from "@/types";

interface PokemonDetailsProps {
	params: Promise<{ id: string }>;
}
const PokemonDetails = async ({ params }: PokemonDetailsProps) => {
	const { id } = await params;

	const pokemon: Pokemon = await getPokemonDetails(Number(id));
	const image: string | null =
		pokemon.sprites.other["official-artwork"].front_default;
	const formattedId = String(id).padStart(3, "0");

	return (
		<main className="flex justify-center w-full">
			<div className="max-w-7xl w-full flex flex-col items-center">
				<BreadcrumbNav id={Number(id)} name={pokemon.name} />

				<div className="mt-9 flex flex-col items-center w-full">
					<div className="w-full max-w-4xl bg-gray-900 border-white/50 border-2 rounded-xl flex flex-col md:flex-row items-center gap-10 p-5">
						<Image src={image} alt={pokemon.name} width={300} height={250} />

						<div className="flex flex-col items-center md:items-start">
							<p className="text-white/50 text-sm">#{formattedId}</p>
							<h3 className="text-3xl md:text-6xl capitalize mb-3">
								{pokemon.name}
							</h3>

							<span
								className={`type-${pokemon.types[0].type.name} px-4 py-1 rounded-full`}
							>
								{pokemon.types[0].type.name}
							</span>
						</div>
					</div>

					<div className="w-full grid max-w-4xl max-sm:grid-cols-2  grid-cols-3 py-5 mt-7 gap-7">
						<div className="bg-gray-950 p-3 border border-white rounded-xl flex flex-col items-center  gap-2">
							<p className="text-slate-600 font-semibold text-lg tracking-widest">
								Height
							</p>
							<p className="font-bold text-xl">{pokemon.height}</p>
						</div>
						<div className="bg-gray-950 p-3 border border-white rounded-xl flex flex-col items-center  gap-2">
							<p className="text-slate-600 font-semibold text-lg tracking-widest">
								Weight
							</p>
							<p className="font-bold text-xl">{pokemon.weight}</p>
						</div>
						<div className="bg-gray-950 p-3 border border-white rounded-xl flex flex-col items-center  gap-2 ">
							<p className="text-slate-600 font-semibold text-lg tracking-widest">
								Base XP
							</p>
							<p className="font-bold text-xl">{pokemon.base_experience}</p>
						</div>
					
					</div>

          <div className="w-full max-w-4xl  p-5 bg-gray-900 rounded-xl mt-7 ">
            <h3 className="font-semibold text-2xl">Abilities</h3>
            <div className="flex flex-col items-center gap-5 mt-9">
              {
                pokemon.abilities.map(a => (
                  <div className="bg-gray-700 w-full rounded-lg flex justify-between p-3 capitalize" key={a.ability.name}>
                    <p>{a.ability.name}</p>
                    <span className={`${a.is_hidden ?'type-normal' : 'type-ghost'} px-4 rounded-full`}>{a.is_hidden ? 'Hidden' : 'Standard'}</span>
                  </div>
                ))
              }
            </div>
          </div>


          <div className="w-full max-w-4xl  p-5 bg-gray-900 rounded-xl mt-7 mb-9 ">
            <h3 className="font-semibold text-2xl">Types</h3>
            <div className="flex items-center gap-5 mt-5 ml-5">
              {
                pokemon.types.map(t => (
                  
                    <span key={t.type.name}  className=" px-5  rounded-full border-2 type-ice capitalize">{t.type.name}</span>
                    
            
                ))
              }
            </div>
          </div>
				</div>
			</div>
		</main>
	);
};

export default PokemonDetails;
