import "../modal.css";
import { useState, useEffect } from "react";
import {
  getSharedCurrentFolderLocalURL,
  getSharedCurrentFolderDevURL,
} from "../../../api/api";

import shareKakao from "../../../utils/share/shareKakao";

const ShareModal = (props) => {
  const { userId, folderId } = props.params;
  const [shareURL, setShareURL] = useState("");

  useEffect(() => {
    setShareURL(getSharedCurrentFolderLocalURL(folderId, userId));
  }, [userId, folderId]);

  const onKakaoShare = () => {
    shareKakao(shareURL);
  };

  const onFacebookShare = () => {
    const tempURL = getSharedCurrentFolderDevURL(folderId, userId);
    const encodedURL = encodeURIComponent(tempURL);
    window.open("http://www.facebook.com/sharer.php?u=" + encodedURL);
  };

  const onCopyClipboard = () => {
    window.navigator.clipboard
      .writeText(shareURL)
      .then((rsp) => {
        alert("링크가 복사되었습니다.");
        return rsp;
      })
      .catch((rsp) => alert("링크 복사에 실패했습니다."));
  };

  return (
    <>
      <div className="modal_title">폴더 공유</div>
      <div className="modal_sub_title">폴더명</div>
      <div className="share_container">
        <div>
          <div
            className="share_item"
            id="kakao_link_btn"
            onClick={onKakaoShare}
          >
            <div className="share_icon kakao">
              <img src="./images/kakao.svg" />
            </div>
            <div className="share_icon_text">카카오톡</div>
          </div>
          <div className="share_item" onClick={onFacebookShare}>
            <div className="share_icon facebook">
              <img src="./images/facebook.svg" />
            </div>
            <div className="share_icon_text">페이스북</div>
          </div>
          <div className="share_item" onClick={onCopyClipboard}>
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
