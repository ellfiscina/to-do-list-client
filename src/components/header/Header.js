import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
    render() {
        return(
            <div>
                <Navbar>
                    <Navbar.Brand>
                        <FontAwesomeIcon icon="check-circle" size="lg" /> My To-do List
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;
