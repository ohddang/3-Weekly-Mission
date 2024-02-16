import "./footer.css";
import Image from "next/image";

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
              <Image src="/images/facebook.svg" className="facebook" alt="facebook" width="16" height="16" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <Image src="/images/twitter.svg" className="twitter" alt="twitter" width="16" height="16" />
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <Image src="/images/youtube.svg" className="youtube" alt="youtube" width="16" height="16" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <Image src="/images/instargram.svg" className="instargram" alt="instargram" width="16" height="16" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
