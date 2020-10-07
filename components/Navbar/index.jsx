import { useState } from "react";
import CustomLink from "./CustomLink";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mod-navbar">
      <Navbar light expand="md" className="justify-content-between">
        <NavbarBrand href="/">
          <img
            className="logo-white"
            src="/images/logo-dinkbit-23.svg"
            alt="loho-dinkbit"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-aut text-muted" navbar>
            <CustomLink path="/nosotros">Nosotros</CustomLink>
            <CustomLink path="/que-hacemos">¿Qué hacemos?</CustomLink>
            <CustomLink path="/proyectos">Proyectos</CustomLink>
            <CustomLink path="/contacto">Contacto</CustomLink>
            <CustomLink path="/blog">Blog</CustomLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
