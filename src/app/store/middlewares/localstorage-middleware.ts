import { RootState } from "..";
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        
        next(action);

        if( action.type === 'pokemons/toggleFavorite' ) {
            const { pokemons } = state.getState() as RootState;
            console.log({pokemons})
            localStorage.setItem('favorite-pokemons', JSON.stringify( pokemons.favorites ));
            return;
        }
    }
}