import React, { Component } from 'react';

import CheckList from './CheckList';

import './App.css';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <CheckList />
        </div>
      </section>
    );
  }
}

export default App;
