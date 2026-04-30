export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  habitat: string;
  color: string; 
  sprites: Sprites;
  types: Type[];
  location_area_encounters?: string
}

export interface Sprites {
  front_default: string;
  back_default?: string;
  back_shiny?: string;
  front_shiny?: string;
}

export interface Type {
  type: TypeDetails;
}

export interface TypeDetails {
  name: string;
  url?: string;
}