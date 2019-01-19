import React, { Component } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler, 
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5" >
          <container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/yaelBrown">Github</NavLink>
                </NavItem>
              </nav>  
            </Collapse>
          </container>
        </Navbar>
      </div>
    );
  }

}



export default AppNavbar;

