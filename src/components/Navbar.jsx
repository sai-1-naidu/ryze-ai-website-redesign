import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Ryze<span className="text-dark">AI</span>
        </Link>

        {/* Nav Items */}
        <div className="d-flex align-items-center gap-4 ms-auto">
          <Link className="nav-link fw-medium p-0" to="/">
            Home
          </Link>
          <Link className="nav-link fw-medium p-0" to="/features">
            Features
          </Link>
          <Link className="nav-link fw-medium p-0" to="/pricing">
            Pricing
          </Link>

          <button className="btn btn-primary px-4 ms-2">
            Book Demo
          </button>
        </div>

      </div>
    </nav>
  );
}
