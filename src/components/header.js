import "./css/common.css";
import "./css/header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="navagation_bar">
          <a href="./linkbrary.html" className="linkbrary">
            <img src="/images/linkbrary.svg" />
          </a>
          <a href="signin/signin.html" className="login button_font">
            로그인
          </a>
        </div>

        <div className="main_content">
          <div>코드잇 로고</div>
          <div>코드잇 한글</div>
          <div>즐겨찾기</div>
        </div>
      </header>
    </>
  );
}
