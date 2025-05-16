'use client';

import { useEffect, useState } from "react";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
    const [pokemons, setPokemons] = useState(favoritePokemons);

    useEffect(() => {
      console.log({favoritePokemons})
      if(!favoritePokemons.length) {
        const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || "{}");
        if(favorites) setPokemons(Object.values(favorites));
      }
    }, [pokemons])
    

    return (
        <>
            <span className="text-5xl my-2"> Pokemons favoritos <small className="text-blue-500">Global state</small> </span>

            {
                pokemons.length
                    ? (<PokemonGrid pokemons={pokemons} />)
                    : (<NoFavorites />)
            }
        </>
    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}
