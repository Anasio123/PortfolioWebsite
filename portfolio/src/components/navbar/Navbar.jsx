import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <p style={{ margin: "auto" }}>Anasio Claeys</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto" style={{ alignItems: "center" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/" id="navLink">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutme" id="navLink">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" id="navLink">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" id="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
