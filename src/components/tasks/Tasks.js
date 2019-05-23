import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Tasks extends React.Component {
    render() {
        return(
            <Row>
                <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
                    <p className="title">To-do</p>
                    list...
                </Col>
                <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
                    <p className="title">Done</p>
                    list...
                </Col>
            </Row>
        );
    }
}

export default Tasks;