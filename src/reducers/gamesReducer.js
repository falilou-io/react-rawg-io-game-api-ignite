const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

export default function gameReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_GAMES":
      const { popular, upcoming, newGames } = action.payload;
      return {
        ...state,
        popular,
        upcoming,
        newGames,
      };

    default:
      return state;
  }
}
