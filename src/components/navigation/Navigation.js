function Navigation() {
  const title = 'Seven Wonders Score';

  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="#">
        {title}
      </a>
      <div className="navbar-nav">
        <a className="nav-link" href="#">Add table</a>
      </div>
    </nav>
  );
}

export default Navigation;
