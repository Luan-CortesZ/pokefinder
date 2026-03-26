class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.height = data.height;
        this.weight = data.weight;
        this.location_area_encounters = data.location_area_encounters;
        this.sprites = {
            front_default: data.sprites.front_default,
            front_shiny: data.sprites.front_shiny,
            back_default: data.sprites.back_default,
            back_shiny: data.sprites.back_shiny,
        };
        this.types = data.types.map(t => ({
            slot: t.slot,
            type: {
                name: t.type.name,
                url: t.type.url
            }
        }));
    }
}

module.exports = Pokemon;