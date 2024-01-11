import "../modal.css";

const ShareModal = () => {
  return (
    <>
      <div className="modal_title">폴더 공유</div>
      <div className="modal_sub_title">폴더명</div>
      <div className="share_container">
        <div>
          <div className="share_item">
            <div className="share_icon kakao">
              <img src="./images/kakao.svg" />
            </div>
            <div className="share_icon_text">카카오톡</div>
          </div>
          <div className="share_item">
            <div className="share_icon facebook">
              <img src="./images/facebook.svg" />
            </div>
            <div className="share_icon_text">페이스북</div>
          </div>
          <div className="share_item">
            <div className="share_icon">
              <img src="./images/link.svg" />
            </div>
            <div className="share_icon_text">링크 복사</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
