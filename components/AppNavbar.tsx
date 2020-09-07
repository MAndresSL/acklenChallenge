import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
	auth: boolean;
}

const LoggedInNavbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item dropdown">
						<LogoutButton />
					</li>
				</ul>
			</div>
		</nav>
	);
};

const LoggedOutNavbar = () => {
	const router = useRouter();

	const redirect = async () => {
		router.push("/about");
	};

	return (
		<Navbar bg="light" sticky="top">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link href="/">
						<Nav.Link onClick={() => router.push("/")}>Home</Nav.Link>
					</Link>
					<Link href="/about">
						<Nav.Link onClick={() => router.push("/about")}>Oracle</Nav.Link>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const AppNavbar: React.FC<Props> = ({ auth }) => {
	const isAuthenticated = auth;
	console.log("isAuth " + isAuthenticated);

	return (
		<div>{isAuthenticated ? <LoggedInNavbar /> : <LoggedOutNavbar />}</div>
	);
};

export default AppNavbar;
