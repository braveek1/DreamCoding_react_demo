import React, { Component } from 'react';

class Reset extends Component {
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <>
        <div>
          <button className='reset-button' onClick={this.handleReset}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default Reset;
