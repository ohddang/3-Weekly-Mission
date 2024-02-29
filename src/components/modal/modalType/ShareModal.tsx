"use client";

import "../modal.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getSharedCurrentFolderLocalURL, getSharedCurrentFolderDevURL, getRequestCookies } from "@/api/api";

import shareKakao from "@/utils/shareKakao";

interface ShareModalProps {
  folderId: string;
}

const getUserId = async () => {
  const response = await getRequestCookies("userId");
  return response;
};

const ShareModal = ({ folderId }: ShareModalProps) => {
  const [userId, setUserId] = useState("");
  const [shareURL, setShareURL] = useState("");

  getUserId().then((rsp) => setUserId(rsp.value));

  useEffect(() => {
    setShareURL(getSharedCurrentFolderLocalURL(folderId, userId));
  }, [folderId, userId]);

  const onKakaoShare = () => {
    shareKakao(shareURL);
  };

  const onFacebookShare = () => {
    const tempURL = getSharedCurrentFolderDevURL(folderId);
    const encodedURL = encodeURIComponent(tempURL);
    window.open("http://www.facebook.com/sharer.php?u=" + encodedURL);
  };

  const onCopyClipboard = () => {
    window.navigator.clipboard
      .writeText(shareURL)
      .then((rsp) => {
        alert(`${shareURL} 링크가 복사되었습니다.`);
        return rsp;
      })
      .catch((_rsp) => alert("링크 복사에 실패했습니다."));
  };

  return (
    <>
      <div className="modal_title">폴더 공유</div>
      <div className="modal_sub_title">폴더명</div>
      <div className="share_container">
        <div>
          <div className="share_item" id="kakao_link_btn" onClick={onKakaoShare}>
            <div className="share_icon kakao">
              <Image src="/images/kakao.svg" alt="kakao" width="18" height="18" />
            </div>
            <div className="share_icon_text">카카오톡</div>
          </div>
          <div className="share_item" onClick={onFacebookShare}>
            <div className="share_icon facebook">
              <Image src="/images/facebook.svg" alt="facebook" width="18" height="18" />
            </div>
            <div className="share_icon_text">페이스북</div>
          </div>
          <div className="share_item" onClick={onCopyClipboard}>
            <div className="share_icon">
              <Image src="/images/link.svg" alt="link" width="18" height="18" />
            </div>
            <div className="share_icon_text">링크 복사</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
