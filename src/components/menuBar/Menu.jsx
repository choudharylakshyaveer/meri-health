import React, { Component } from 'react'
import { Navbar,Nav ,Form,FormControl,Button } from 'react-bootstrap'


class Menu extends React.Component{
    render() {
        return <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">MeriHealth</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#contactUs">Contact Us</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Navbar>
        </div>
    }

}

export default  Menu;