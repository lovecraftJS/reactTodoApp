import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
