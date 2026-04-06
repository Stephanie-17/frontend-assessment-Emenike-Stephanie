"use client";
import { PokemonType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PokemanCardProps {
	id: number;
	name: string;
	image: string;
	types: PokemonType[];
	baseExperience: number;
}
const PokemonCard = ({
	id,
	name,
	image,
	types,
	baseExperience,
}: PokemanCardProps) => {
	const [imgError, setImgError] = useState(false);

	const formattedId = String(id).padStart(3, "0");
	const primaryType = types[0].type.name;
	return (
		<Link href={`/pokemon/${id}`}>
			<div className="bg-primary border-white/50 border-2 rounded-xl flex flex-col justify-center">
				<div className="p-10 w-full flex justify-center">
					{imgError || !image ? (
						<div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
							<span className="text-gray-300 text-4xl">?</span>
						</div>
					) : (
						<Image
							className="w-full rounded-xl object-contain"
							src={image}
							alt={name}
							width={100}
							height={100}
							onError={() => setImgError(true)}
						/>
					)}
				</div>

				<div className="w-full bg-white/10 p-3">
					<p className="text-gray-400 text-xs mb-2">#{formattedId}</p>
					<p className="font-bold  tracking-widest mb-3">{name}</p>
					<div className="flex justify-between items-center">
						<span
							className={`px-4 py-1 rounded-full text-xs type-${primaryType} font-semibold uppercase`}
						>
							{primaryType}
						</span>
						<p className="text-sm text-gray-500">{baseExperience} XP</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PokemonCard;
