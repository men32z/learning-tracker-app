import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

function PrivateRoute({
  children, isLogged, inverse, ...rest
}) {
  return (
    <Route
    /* eslint-disable-next-line */
      {...rest}
      render={({ location }) => ((isLogged && !inverse) || (!isLogged && inverse) ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: !inverse ? '/login' : '/',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

PrivateRoute.defaultProps = {
  inverse: false,
};

PrivateRoute.propTypes = {
  inverse: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
