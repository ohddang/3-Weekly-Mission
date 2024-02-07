import "./header.css";

import { useState, useRef, MouseEvent } from "react";
import ModalPortal from "components/modal/ModalPortal";
import { BaseModal, ModalType } from "../modal";

const FolderHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(0);
  const linkRef = useRef<HTMLInputElement>(null);

  const onShowModal = (event: MouseEvent<HTMLDivElement | MouseEvent>, modalType: number) => {
    event.stopPropagation();

    if (linkRef.current && linkRef.current.value === "") {
      alert("링크를 입력해주세요.");
      return;
    } else {
      setShowModal(true);
      setModalType(modalType);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="title_container">
        <div className="folder_title_container">
          <div className="folder_title_input_container">
            <img src="./images/link.svg" className="link_image" />
            <input ref={linkRef} className="folder_title_input" placeholder="링크를 추가해 보세요." />
            <div className="folder_title_button" onClick={(event) => onShowModal(event, ModalType.ADD)}>
              <div>추가하기</div>
            </div>
          </div>
        </div>
        {showModal && <ModalPortal>{<BaseModal modalType={modalType} onClose={onCloseModal} />}</ModalPortal>}
      </section>
    </>
  );
};

export default FolderHeader;
