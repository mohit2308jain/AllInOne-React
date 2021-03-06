import React from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    state = {
        isNavOpen: false
    }

    closeNavBar = (event) => {
        this.setState({isNavOpen: false})
    }

    toggleNav = () => {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md" style={{fontWeight: 'bolder', background:'black', textcolor:' white'}}>
                    <div className="container">
                        <NavbarToggler onClick={() => this.toggleNav()} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem onClick={(event) => this.closeNavBar(event)}>
                                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                </NavItem>
                                <NavItem onClick={(event) => this.closeNavBar(event)}>
                                    <NavLink className="nav-link" to="/books">Books</NavLink>
                                </NavItem>
                                <NavItem onClick={(event) => this.closeNavBar(event)}>
                                    <NavLink className="nav-link" to="/recipes">Food</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem onClick={(event) => this.closeNavBar(event)}>
                                    <NavLink className="nav-link" to="/weather">Weather</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;