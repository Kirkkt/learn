import {combineReducers, createStore} from "redux";

const Actions = {
  people: {
    CREATE: Symbol(),
    UPDATE: Symbol(),
    DELETE: Symbol(),
  },
  cars: {
    CREATE: Symbol(),
    UPDATE: Symbol(),
    DELETE: Symbol(),
  },
};

const peopleReducer = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case Actions.people.CREATE: {
      nextState[action.payload.id] = action.payload.information;
      return nextState;
    }
    case Actions.people.DELETE: {
      if (action.payload in nextState) {
        // add error handling
      }
      delete nextState[action.payload];
      return nextState;
    }
    case Actions.people.UPDATE: {
      if (action.payload.id in nextState) {
        // add error handling
      }
      nextState[action.payload.id] = Object.assign({}, nextState[action.payload.id], action.payload.information);
      return nextState;
    }
    default: {
      return state;
    }
  }
};

const carsReducer = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case Actions.cars.CREATE: {
      nextState[action.payload.vin] = action.payload.information;
      return nextState;
    }
    case Actions.cars.DELETE: {
      if (action.payload in nextState) {
        // add error handling
      }
      delete nextState[action.payload];
      return nextState;
    }
    case Actions.cars.UPDATE: {
      if (action.payload.vin in nextState) {
        // add error handling
      }
      nextState[action.payload.vin] = Object.assign({}, nextState[action.payload.vin], action.payload.information);
      return nextState;
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  people: peopleReducer,
  cars: carsReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => console.log("store state updated", JSON.stringify(store.getState())));

const run = () => {

  store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "122101AABB",
      information: {
        firstName: "Kirk",
        lastName: "Tang",
      }
    },
  });

  store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "398457DDFF",
      information: {
        firstName: "Logan",
        lastName: "Meyer",
      }
    },
  });

  store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "100000ZZYY",
      information: {
        firstName: "Anthony",
        lastName: "Kyle",
      }
    },
  });

  store.dispatch({
    type: Actions.people.UPDATE,
    payload: {
      id: "100000ZZYY",
      information: {
        firstName: "Tony",
      }
    },
  });
  store.dispatch({
    type: Actions.people.DELETE,
    payload: "398457DDFF",
  });

  store.dispatch({
    type: Actions.cars.CREATE,
    payload: {
      vin: "ABC300984",
      information: {
        milage: 27880,
        make: "Toyota",
        model: "Corolla",
      }
    },
  });

  store.dispatch({
    type: Actions.cars.CREATE,
    payload: {
      vin: "DEF998877",
      information: {
        milage: 0,
        make: "Ford",
        model: "Focus",
      }
    },
  });

  store.dispatch({
    type: Actions.cars.UPDATE,
    payload: {
      vin: "DEF998877",
      information: {
        milage: 1000,
      }
    },
  });

  store.dispatch({
    type: Actions.cars.DELETE,
    payload: "DEF998877",
  });

};
run();
