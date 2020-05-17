import actionTypes from "./Sample1.types";

const initialState = {

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;