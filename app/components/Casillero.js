import React from 'react';
import PropTypes from 'prop-types';

class Casillero extends React.Component {
  render() {
    return (
      <div>
        <input
          type='text'
          defaultValue={this.props.inputValue}
          />

          <input
            type='button'
            value='change!'
            onClick={this.props.onClick}
            />
      </div>
    );
  }
}
Casillero.propTypes = {
  inputValue: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

module.exports = Casillero;
