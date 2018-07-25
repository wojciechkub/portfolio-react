import React from 'react';
import './header.css';
import { 
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends React.Component {
    render(){
        return(
            <Navbar color="dark" light expand="md" className="myHeader">
                <Nav>
                    <NavItem className="itemNav">
                            <NavLink className="headerNav" href="https://google.com">About Me</NavLink>
                    </NavItem>
                    <NavItem className="itemNav">
                            <NavLink className="headerNav" href="https://google.com">Projects</NavLink>
                    </NavItem>
                    <NavItem className="itemNav">
                            <NavLink className="headerNav" href="https://google.com">Abilities</NavLink>
                    </NavItem>
                    <NavItem className="itemNav">
                            <NavLink className="headerNav" href="https://google.com">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header
