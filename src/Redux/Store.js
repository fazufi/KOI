import { createStore } from "redux";

//Global State
const initialState = {
  nama: "-",
};

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      nama: action.nama,
    };
  }
  return state;
};

//Store
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
