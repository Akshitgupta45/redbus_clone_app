import React from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
const AppBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
				<Container>
					<Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" />
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#Prices">Prices</Nav.Link>
						</Nav>
						<Nav>
							<NavDropdown
								title={<FaRegUserCircle />}
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item href="#SignIn/SignUp">
									SignIn/SignUp
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default AppBar;
