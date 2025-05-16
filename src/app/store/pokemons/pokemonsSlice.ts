import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  favorites: {[key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
//   if(typeof localStorage === 'undefined') return {};
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites;
// }

const initialState: PokemonsState = {
  favorites : {},
  // ...getInitialState(),
  // '1': { id: '1', name: 'Bulbasaur' },
  // '3': { id: '3', name: 'Venusaur' },
  // '5': { id: '5', name: 'Charmeleon' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, actions: PayloadAction<SimplePokemon>) {

      const pokemon = actions.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return
      }

      state.favorites[id] = pokemon;
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;