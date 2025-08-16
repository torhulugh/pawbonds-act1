import "./style.css";
export default function Footer() {
  return (
    <footer>
      <section id="foot--left--side--items">
        <div id="footer--left--side--top--items">
          <div id="footer--logo--nd--email--container">
            <img src="assets/pawbonds-logo.png" alt="" id="footer--logo" />
            <a href="" id="footer--email--address">
              pawbonds@gmail.com
            </a>
          </div>
          <div id="footer--page--column--1">
            <a href="" id="footerPageColumn1--link1">
              Home
            </a>
            <a href="" id="footer--link3">
              Services
            </a>
            <a href="" id="footer--link3">
              About
            </a>
          </div>
          <div id="footer--page--column--2">
            <a href="" id="footerPageColumn2--link1">
              Contact
            </a>
            <a href="" id="footer--link3">
              Special Offers
            </a>
            <a href="" id="footer--link3">
              careers
            </a>
          </div>
          <div id="footer--page--links2"></div>
        </div>
        <div id="footer--left--side--bottom--items">
          <img
            src="./public/assets/instagram-icon.png"
            alt="instagram-icon"
            className="footer--social--media--icons"
          />
          <img
            src="./public/assets/youtube-icon.png"
            alt="youtube-icon"
            className="footer--social--media--icons"
          />
          <img
            src="./public/assets/snapchat-icon.png"
            alt="snapchat-icon"
            className="footer--social--media--icons"
          />
          <img
            src="./public/assets/tiktok-icon.png"
            alt="tiktok-icon"
            className="footer--social--media--icons"
          />
        </div>
      </section>
      <section id="footer--right--side--items">
        <div id="emailForm--nd--newsletter--terms--container">
          <form action="" method="get">
            <div id="footer--EmailInput--nd--submitBtn--container">
              <input
                id="footer--newsletter--reg--input"
                type="email"
                placeholder="Email"
              />
              <button id="footer--newsletterReg--submit--btn">
                <img
                  id="send--icons"
                  src="./public/assets/submit-arrow-icon.png"
                  alt="send icon"
                />
              </button>
            </div>
          </form>
          <p>
            Subscribe for updates and freebies. By submitting this form, you
            agree to our Privacy Policy.
          </p>
        </div>
        <p id="footer--copyright--txt">
          © 2025 - Copyright All Rights Reserved
        </p>
      </section>
    </footer>
  );
}
