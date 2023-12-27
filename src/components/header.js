import "./css/contents.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header_content">
          <div className="header_dummy header_layout">
            <a href="./linkbrary.html" className="linkbrary">
              <img src="/images/linkbrary.svg" />
            </a>
            <div className="login_button">
              <a href="signin/signin.html" className="login button_font">
                로그인
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="main_content">
        <div>코드잇 로고</div>
        <div>코드잇 한글</div>
        <div>즐겨찾기</div>
      </div>
    </>
  );
}
