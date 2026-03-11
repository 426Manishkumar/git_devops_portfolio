import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">Intern Portfolio</div>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}