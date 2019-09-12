import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.feature]
        },
        additionalPrice: state.additionalPrice + action.feature.price
      };
    case REMOVE_FEATURE:
      let newFeaturesList = state.car.features.filter(
        element => element.id !== action.feature.id
      );
      console.log(newFeaturesList);
      return {
        ...state,
        car: { ...state.car, features: newFeaturesList },
        additionalPrice: state.additionalPrice - action.feature.price
      };
    default:
      return state;
  }
}

export default reducer;
