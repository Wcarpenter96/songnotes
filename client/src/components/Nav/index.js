import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to='/'> <Navbar.Brand>Songnotes</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/scrape'>Scrape</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
    