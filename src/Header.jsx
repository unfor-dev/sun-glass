export default function Header() {
  return (
    <>
      <div className="element">
        <div className="Hero">
        {/* Header Start */}
        <header className="site-header">
          <div className="site-header-container container">
            <a className="site-header-logo-link" href="#">
              <img
                src="/site-header-logo.svg"
                alt="site logo"
                width="139"
                height="20"
              />
            </a>
            {/* SiteNav Start */}
            <nav className="site-nav">
              <ul className="site-nav-list">
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">Home</a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">About</a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">Contact</a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">Blog</a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">Careers</a>
                </li>
              </ul>
            </nav>
            {/* SiteNav End */}
            <a className="site-header-button" href="#">Request Invite</a>
          </div>
        </header>
        {/* Header End */}

        {/* Hero Start */}
        <div className="container">
        <div className="hero-section">
          <img
            className="hero-img"
            src="/hero-phone.png"
            alt="hero img"
            width="728"
            height="900"
          />
          <img
            className="hero-big-img"
            src="/hero-bg-.png"
            alt="hero img"
            width="1371"
            height="956"
          />
          <div className="hero-section-container container">
            <div className="hero-section-info">
              <h2>Next generation digital banking</h2>
              <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <a href="#">Request Invite</a>
            </div>
          </div>
        </div>
        {/* Hero End */}
        </div>
      </div>
      </div>
    </>
  );
}
