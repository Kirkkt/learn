import {createStore} from 'redux';

const initialState = {
  text: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR': {
      return {
        ...state,
        text: '',
      };
    }
    case 'APPEND': {
      return {
        ...state,
        text: state.text.concat(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, initialState);

store.subscribe(() => console.log('store state updated', store.getState()));

const run = () => {
  store.dispatch({
    type: 'APPEND',
    payload: 'a',
  });
  store.dispatch({
    type: 'APPEND',
    payload: 'b',
  });
  store.dispatch({
    type: 'APPEND',
    payload: 'c',
  });
  store.dispatch({
    type: 'CLEAR',
  });
  store.dispatch({
    type: 'APPEND',
    payload: 'd',
  });
};
run();
