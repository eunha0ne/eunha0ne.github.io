import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '~/app/store';

const ReduxWrapper = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

ReduxWrapper.propTypes = {
  element: PropTypes.object
};

export default ReduxWrapper;
