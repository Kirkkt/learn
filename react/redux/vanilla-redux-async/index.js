import Actions from './Actions';
import Store from './Store';

const runNormal = () => {

  Store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "122101AABB",
      information: {
        firstName: "Kirk",
        lastName: "Tang",
      }
    },
  });

  Store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "398457DDFF",
      information: {
        firstName: "Logan",
        lastName: "Meyer",
      }
    },
  });

  Store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "100000ZZYY",
      information: {
        firstName: "Anthony",
        lastName: "Kyle",
      }
    },
  });

  Store.dispatch({
    type: Actions.people.UPDATE,
    payload: {
      id: "100000ZZYY",
      information: {
        firstName: "Tony",
      }
    },
  });
  Store.dispatch({
    type: Actions.people.DELETE,
    payload: "398457DDFF",
  });

  Store.dispatch({
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

  Store.dispatch({
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

  Store.dispatch({
    type: Actions.cars.UPDATE,
    payload: {
      vin: "DEF998877",
      information: {
        milage: 1000,
      }
    },
  });

  Store.dispatch({
    type: Actions.cars.DELETE,
    payload: "DEF998877",
  });

};

const runWithError = () => {

  Store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "122101AABB",
      information: {
        firstName: "Kirk",
        lastName: "Tang",
      }
    },
  });

  Store.dispatch({
    type: Actions.people.UPDATE,
    payload: {
      id: "398457DDFF",
      information: {
        firstName: "Logan",
        lastName: "Meyer",
      }
    },
  });

  Store.dispatch({
    type: Actions.people.DELETE,
    payload: "398457DDFF",
  });

  Store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "122101AABB",
      information: {
        firstName: "Kirk",
        lastName: "Tang",
      }
    },
  });
  
};

const runAsync = () => {

  Store.dispatch({
    type: Actions.people.CREATE,
    payload: {
      id: "100000ZZYY",
      information: {
        firstName: "Anthony",
        lastName: "Kyle",
      }
    },

  })

  Store.dispatch((dispatch) => {
    setTimeout(() =>
      dispatch({
        type: Actions.people.UPDATE,
        payload: {
          id: "100000ZZYY",
          information: {
            firstName: "Tony",
            lastName: "Kyle",
          }
        },
      }),
      1000
    );
  });

};

runAsync();
