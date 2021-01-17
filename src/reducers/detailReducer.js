const initialState = {
  game: {},
};

export default function detailReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DETAIL":
      const { game } = action.payload;
      return {
        ...state,
        game,
      };
    default: {
      return { ...state };
    }
  }
}
