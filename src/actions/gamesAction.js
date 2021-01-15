import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch games with axios
  const popularGamesData = await axios.get(popularGamesUrl());
  const upcomingGamesData = await axios.get(upcomingGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
