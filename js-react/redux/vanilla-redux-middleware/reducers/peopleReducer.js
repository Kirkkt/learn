import Actions from '../Actions';

const peopleReducer = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case Actions.people.CREATE: {
      if (action.payload.id in nextState) {
        throw new Error("id already taken: " + action.payload.id);
      }
      nextState[action.payload.id] = action.payload.information;
      return nextState;
    }
    case Actions.people.DELETE: {
      if (!(action.payload in nextState)) {
        throw new Error("id not found: " + action.payload);
      }
      delete nextState[action.payload];
      return nextState;
    }
    case Actions.people.UPDATE: {
      if (!(action.payload.id in nextState)) {
        throw new Error("id not found: " + action.payload.id);
      }
      nextState[action.payload.id] = Object.assign({}, nextState[action.payload.id], action.payload.information);
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default peopleReducer;
