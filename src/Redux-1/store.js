const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 19,
};

// reducer function yang mengubah state/data di redux

const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_AGE") {
    return {
      ...state,
      age: state.age + 1,
    };
  }
  if (action.type === "ADD_VALUE") {
    return {
      ...state,
      value: action.newValue,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// subcrition
store.subscribe(() => {
  console.log("store change", store.getState());
});

// dispatch atau action

store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "ADD_VALUE", newValue: 12 });

console.log(store.getState());
