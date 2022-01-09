import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import HabitAdd from './components/habitAdd';
import Habits from './components/habits';
import Reset from './components/reset';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleHabitAdd = (habitName) => {
    const HABIT_ID_DEFALUT = 1;
    const habits = this.state.habits;
    const habitId =
      habits.length > 0 ? habits[habits.length - 1].id + 1 : HABIT_ID_DEFALUT;
    const habit = {
      id: habitId,
      name: habitName,
      count: 0,
    };
    habits.push(habit);
    this.setState({ habits });
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits;
    habits.map((item) => (item.count = 0));
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <HabitAdd onHabitAdd={this.handleHabitAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
