'use client';
import { store } from ".";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch(setFavoritePokemons(favorites));
  }, [])
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
