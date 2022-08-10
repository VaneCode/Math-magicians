/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <button type="button">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
