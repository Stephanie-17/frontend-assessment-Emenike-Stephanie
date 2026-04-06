export interface Pokemon {
  id: number,
  name: string,
  types: PokemonType[],
  sprites: PokemonSprites 
  stats: PokemonStat[],
  abilities: PokemonAbility[],
  base_experience: number, //XP
  weight: number,
  height: number
}


export interface PokemonListItem {
  name: string,
  url: string
}


export interface PokemonListResponse {
 count: number,
 next: string | null,
 previous: string | null
 results : PokemonListItem[]
}

export interface PokemonType {
  slot:number,
  type: {
    name: string,
    url: string
  }
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface PokemonAbility {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean //can be used to see if it's a hidden ability or a standard one 
  slot: number
}

export interface PokemonTypeResult {
  name: string
  url: string
}

export interface PokemonTypeResponse {
  count: number
  results: PokemonTypeResult[]
}

export interface PokemonSprites {
  front_default: string | null
  other: {
    "official-artwork": {
      front_default: string | null
    }
  }
}