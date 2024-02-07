import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <ul className="footer_list">
          <li className="codeit footer_font">©codeit - 2023</li>
          <li className="policy_faq">
            <a href="policy/index.html" className="policy footer_font">
              Privacy Policy
            </a>
            <a href="faq/index.html" className="faq footer_font">
              FAQ
            </a>
          </li>
          <li className="sns">
            <a target="_blank" href="https://www.facebook.com/">
              <img src="/images/facebook.svg" className="facebook" alt="facebook" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <img src="/images/twitter.svg" className="twitter" alt="twitter" />
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <img src="/images/youtube.svg" className="youtube" alt="youtube" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <img src="/images/instargram.svg" className="instargram" alt="instargram" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
