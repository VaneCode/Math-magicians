/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    const { value } = this.props;
    this.props.clickHandler(value);
  };

  render() {
    const { value } = this.props;
    return (
      <button type="button" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  clickHandler: null,
};

export default Button;
