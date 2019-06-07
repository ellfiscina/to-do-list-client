import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import List from './list/List';
import CreateTask from './create_tasks/CreateTasks';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.loadTasks = this.loadTasks.bind(this);
  }

  async loadTasks() {
    let response = await fetch(`http://localhost:3001/tasks`);
    const tasks = await response.json();
    this.setState({ tasks: tasks });
  }

  componentDidMount() {
    this.loadTasks();
  }

  async deleteTask(tasks) {
    if (window.confirm("Are you sure you want to delete all tasks")) {
      tasks.map((task, index) => {
        fetch(`http://localhost:3001/tasks/${task.id}`, {method: 'DELETE'});
      })
    } 
  }

  render() {
    return(
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">To-do</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter(task => task.done === false)} />
          <CreateTask loadTasks={this.loadTasks} />
        </Col>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Done</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter(task => task.done === true)} />
          <Button 
            variant="red" 
            className="float-right remove_tasks_btn" 
            onClick={() => this.deleteTask(this.state.tasks.filter(task => task.done === true))}
          >
            Remove all tasks
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Tasks;