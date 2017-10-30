import Actions from '../Actions';

const carsReducer = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case Actions.cars.CREATE: {
      if (action.payload.vin in nextState) {
        throw new Error("vin already taken: " + action.payload.vin);
      }
      nextState[action.payload.vin] = action.payload.information;
      return nextState;
    }
    case Actions.cars.DELETE: {
      if (!(action.payload in nextState)) {
        throw new Error("vin not found: " + action.payload);
      }
      delete nextState[action.payload];
      return nextState;
    }
    case Actions.cars.UPDATE: {
      if (!(action.payload.vin in nextState)) {
        throw new Error("vin not found: " + action.payload.vin);
      }
      nextState[action.payload.vin] = Object.assign({}, nextState[action.payload.vin], action.payload.information);
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default carsReducer;
