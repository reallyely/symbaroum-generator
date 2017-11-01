import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppWrapper from "./containers/AppWrapper";

import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import LockedItems from "./components/LockedItems";

class App extends Component {
  render() {
    return (
      <AppWrapper className='App'>
        <SearchBar />
        <Table />
        <LockedItems />
      </AppWrapper>

    );
  }
}

export default App;
