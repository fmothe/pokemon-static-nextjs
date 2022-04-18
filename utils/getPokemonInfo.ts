import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
    const { data } = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
    );
    return {
        name: data.name,
        id: data.id,
        abilities: data.abilities,
        sprites: data.sprites,
    };
};
