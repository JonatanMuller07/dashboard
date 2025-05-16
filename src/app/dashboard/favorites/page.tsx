import { Metadata } from "next";
import { FavoritePokemons } from "@/pokemons";

export const metadata: Metadata = {
    title: "Favoritos",
    description: "Listado de pokemons favoritos",
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <FavoritePokemons />
        </div>
    );
}