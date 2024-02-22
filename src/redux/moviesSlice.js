import { createSlice } from "@reduxjs/toolkit";

export const loadFavoritesFromLocalStorage = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return addToFavorites(favorites); // Dispara la acción para agregar las películas favoritas al estado
};

const initialState = {
  favorites: [],
  purchasedTickets: []
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movieId = action.payload;
      if (!state.favorites.includes(movieId)) {
        state.favorites.push(movieId);
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter(id => id !== movieId);
    },
    addPurchasedTicket: (state, action) => {
      const ticketData = action.payload;
      state.purchasedTickets.push(ticketData);
    }
  }
});

export const { addToFavorites, removeFromFavorites, addPurchasedTicket } = moviesSlice.actions;

export default moviesSlice.reducer;
