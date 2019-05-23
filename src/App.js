import React from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header/Header';

library.add(faCheckCircle, faTrashAlt)

class App extends React.Component {
  render() {
    return(
      <div><Header /></div>
    );
  }
}

export default App;
