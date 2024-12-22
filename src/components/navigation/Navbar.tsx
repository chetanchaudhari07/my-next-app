import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <nav className="flex-1">
      <div className="flex space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/card">Cards</NavLink>
        <NavLink href="/category">Categories</NavLink>
      </div>
    </nav>
  );
}