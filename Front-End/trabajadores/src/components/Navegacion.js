import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/styleNav.css';  //! Estilos personalizados
import logo from '../assets/logo.jpg'; //! Importa la imagen 

const Navegacion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="shadow-sm p-3 mb-5 bg-dark rounded">
        <Container>
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
            Los Molcajetes 2
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/" className="nav-link " >Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/menu" className="nav-link">Menú</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ubicacion" className="nav-link">Ubicación</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacto" className="nav-link">Contacto</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="navbar-text">Restaurante Familiar</NavbarText>
          </Collapse>
        </Container>
      </Navbar>


        {/* CARRUSEL */}
        


    </div>
  );
}

export default Navegacion;
