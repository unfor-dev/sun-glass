export default function Main2() {
  return (
    <div className="element-2">
        {/* Footer Start */}
        <footer className="site-footer">
            <div className="site-footer-container container">
                <div className="socials-wrapper">
                    <a className="site-footer-logo-link" href="#">
                        <img src="/site-footer-logo.svg" alt="site logo" width="139" height="20" />
                    </a>
                    <ul className="socials-list">
                        <li className="social-item"><a className="social-link" href="#"><img src="/facebook-icon.svg" alt="facebook icon" /></a></li>
                        <li className="social-item"><a className="social-link" href="#"><img src="/youtube-icon.svg" alt="youtube icon" /></a></li>
                        <li className="social-item"><a className="social-link" href="#"><img src="/twitter-icon.svg" alt="twitter icon" /></a></li>
                        <li className="social-item"><a className="social-link" href="#"><img src="/pinterest-icon.svg" alt="pinterest icon" /></a></li>
                        <li className="social-item"><a className="social-link" href="#"><img src="/instagram-icon.svg" alt="instagram icon" /></a></li>
                    </ul>
                </div>
                <nav className="site-footer-nav">
                    <ul className="site-footer-nav-list">
                        <li className="site-footer-nav-item"><a href="#">About Us</a></li>
                        <li className="site-footer-nav-item"><a href="#">Contact</a></li>
                        <li className="site-footer-nav-item"><a href="#">Blog</a></li>
                    </ul>
                    <ul className="site-footer-nav-list">
                        <li className="site-footer-nav-item"><a href="#">Careers</a></li>
                        <li className="site-footer-nav-item"><a href="#">Support</a></li>
                        <li className="site-footer-nav-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                </nav>
                <div className="site-footer-button-wrapper">
                    <a href="#">Request Invite</a>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
        {/* Footer End */}
    </div>
  );
}
