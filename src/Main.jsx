export default function Main() {

  return (
    <div className="element-1">
      {/* Main Start */}
      <div className="container">
      <main className="main-section">
        <div className="main-section-container container">
          {/* About site Start */}
          <div className="about-site-section-wrapper">
            <div className="about-site-info-wrapper">
              <h2>Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>

            <div className="about-site-cards-wrapper">
              <div className="about-site-card-wrapper">
                <img
                  src="/card-1.svg"
                  alt="online banking"
                  width="72"
                  height="72"
                />
                <h3>Online Banking</h3>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>

              <div className="about-site-card-wrapper">
                <img
                  src="/card-2.svg"
                  alt="simple budgeting"
                  width="72"
                  height="72"
                />
                <h3>Simple Budgeting</h3>
                <p>
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>

              <div className="about-site-card-wrapper">
                <img
                  src="/card-3.svg"
                  alt="fast onboarding"
                  width="72"
                  height="72"
                />
                <h3>Fast Onboarding</h3>
                <p>
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>

              <div className="about-site-card-wrapper">
                <img
                  src="/card-4.svg"
                  alt="open api"
                  width="72"
                  height="72"
                />
                <h3>Open API</h3>
                <p>
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
          {/* About site End */}
        </div>

        <div className="articles-section">
          <div className="articles-section-container container">
            <h2>Latest Articles</h2>
            <div className="article-cards-wrapper">
              <div className="article-card-wrapper">
                <img
                  src="/card-2-1.svg"
                  alt="money"
                  width="255"
                  height="200"
                />
                <p className="auth-name">By Claire Robinson</p>
                <h4>Receive money in any currency with no fees</h4>
                <p className="article-info">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single …
                </p>
              </div>

              <div className="article-card-wrapper">
                <img
                  src="/card-2-2.svg"
                  alt="salad"
                  width="255"
                  height="200"
                />
                <p className="auth-name">By Wilson Hutton</p>
                <h4>Treat yourself without worrying about money</h4>
                <p className="article-info">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>

              <div className="article-card-wrapper">
                <img
                  src="/card-2-3.svg"
                  alt="airplane wing"
                  width="255"
                  height="200"
                />
                <p className="auth-name">By Wilson Hutton</p>
                <h4>Take your Easybank card wherever you go</h4>
                <p className="article-info">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>

              <div className="article-card-wrapper">
                <img
                  src="/card-2-4.svg"
                  alt="thin things"
                  width="255"
                  height="200"
                />
                <p className="auth-name">By Claire Robinson</p>
                <h4>Our invite-only Beta accounts are now live!</h4>
                <p className="article-info">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Main End */}
    </div>
    </div>
  );
}
