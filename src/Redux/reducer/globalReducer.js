import ActionType from "./globalActionType";

const globalState = {
  order: 3,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.PLUS_ORDER) {
    return {
      ...state,
      order: state.order + 1,
    };
  }
  if (action.type === ActionType.MINUS_ORDER) {
    let order = 0;
    if (state.order > 0) {
      return {
        ...state,
        order: state.order - 1,
      };
    }
    return {
      ...state,
      order: order,
    };
  }
  return state;
};

export default rootReducer;
