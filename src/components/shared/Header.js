import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import { NavDropdown } from 'react-bootstrap'

const linkStyle = {
	color: 'white',
	textDecoration: 'none',
	margin: '10px'
}
const authenticatedOptions = (
	<>
		<Nav.Item style={linkStyle}>
			<Link to='saved-articles' style={linkStyle}>Saved</Link>
		</Nav.Item>

		<NavDropdown
			id="nav-dropdown-dark-example"
			title="Other Options"
			menuVariant="dark"
		>
			<NavDropdown.Item>
				<Link to='change-password' style={linkStyle}>
					Change Password
				</Link>
			</NavDropdown.Item>

			<NavDropdown.Item>
				<Link to='sign-out' style={linkStyle}>
					Sign Out
				</Link>
			</NavDropdown.Item>
		</NavDropdown>


	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item style={{ margin: '10px' }}>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item style={{ margin: '10px' }}>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user, performSearch }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand style={{ fontSize: '60px' }}>
			<Link to='/' style={linkStyle}>
				Techy
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto' style={{ margin: '10px' }}>
				{user && (
					<span className='navbar-text' >Welcome, {user.email}</span>
				)}

				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}

				<SearchBar performSearch={performSearch} />
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
