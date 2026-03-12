export interface Pokemon {
  height: number
  id: number
  location_area_encounters: string
  name: string
  sprites: Sprites
  types: Type[]
  weight: number
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

  
export const pokemons: Pokemon[] = [
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
  {
    "height": 7,
    "id": 1,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "name": "bulbasaur",
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        }
      }
    ],
    "weight": 69
  },
];