import { combineReducers } from "redux";
import myData from "../../data/nba.json";

const data = (state = myData, action) => {
  switch (action.type) {
    case "ADDDATA": {
      try {
        return [...state, ...action.data];
      } catch (e) {
        console.log(e);
      } finally {
        return state;
      }
    }

    default:
      return state;
  }
};
const teams = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.team];
    case "DEL":
      return state.filter(item => item !== action.team);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const filt = (state = "Visitor/Home", action) => {
  switch (action.type) {
    case "FILT":
      return action.filtOption;
    default:
      return state;
  }
};

const reducer = combineReducers({
  data,
  teams,
  filt
});

export default reducer;
