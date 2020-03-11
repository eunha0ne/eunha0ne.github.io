import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'src/store/modules';

const store = createStore(rootReducer);

export default ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
};
