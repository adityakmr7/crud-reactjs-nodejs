import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const AppBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Article</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/create">Create Article</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        )

}

export default AppBar;