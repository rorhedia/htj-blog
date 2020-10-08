import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CustomLink from "./CustomLink";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

export default function CustomNavbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const navbar = document.querySelector(".mod-navbar");

    window.addEventListener("scroll", function () {
      let top = window.scrollY;

      if (top >= 30 && router.pathname == "/blog") {
        navbar.classList.add("bg-color");
      } else if (top >= 30 && router.pathname != "/blog") {
        navbar.classList.add("bg-color-white");
      } else {
        navbar.classList.remove("bg-color", "bg-color-white");
      }
    });
  }, []);

  let logoDinkbit = "/images/logo-dinkbit-22.svg";
  if (router.pathname == "/blog") {
    logoDinkbit = "/images/logo-dinkbit-23.svg";
  }

  return (
    <div className="mod-navbar fixed-top">
      <Navbar light expand="md" className="justify-content-between">
        <NavbarBrand href="/">
          <img className="logo-white" src={logoDinkbit} alt="loho-dinkbit" />
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
