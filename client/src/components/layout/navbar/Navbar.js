import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from './logo.png'

export default () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: '40px' }}>
            <Link to="/">
                <Navbar.Brand>
                    <img
                        alt="Logotipo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                Coaster Nation!
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/coasters">Montañas rusas</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

