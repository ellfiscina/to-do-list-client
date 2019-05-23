import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';

library.add(faCheckCircle, faTrashAlt)

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Container>
          <Tasks />
        </Container>
      </div>
    );
  }
}

export default App;
