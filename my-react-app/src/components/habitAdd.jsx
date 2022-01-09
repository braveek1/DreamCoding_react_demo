import React, { Component } from 'react';

class HabitAdd extends Component {
  handleHabitAdd = () => {
    const habitName = document.getElementById('habitAdd-input').value;
    if (habitName) {
      this.props.onHabitAdd(habitName);
    } else {
      return;
    }
  };

  render() {
    return (
      <>
        <div className='habitAdd'>
          <input
            id='habitAdd-input'
            className='habitAdd-input'
            type='text'
            placeholder='Habit'
          />
          <button className='habitAdd-button' onClick={this.handleHabitAdd}>
            Add
          </button>
        </div>
      </>
    );
  }
}

export default HabitAdd;
