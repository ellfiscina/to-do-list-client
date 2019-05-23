import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt)

class App extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

export default App;
