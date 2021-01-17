import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gamesReducer from "./gamesReducer";

const allReducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default allReducers;
