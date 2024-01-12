import { useState } from "react";

import Modal from "../../modal/modal";
import BaseModal, { ModalType } from "../../modal/BaseModal";

const KebabPopover = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(0);

  const { onClose } = props;

  const onShowModal = (event, modalType) => {
    event.stopPropagation();

    setShowModal(true);
    setModalType(modalType);
  };

  const onCloseModal = () => {
    setShowModal(false);
    onClose();
    // 지금 현재 컴포넌트에서 전달받은 props(상태)값을 변경하고 변경된 상태를 부모 컴포넌트에 전달함
    // 자식에서 변경로직
  };

  return (
    <>
      <div className="kebab_popover">
        <div
          className="kebab_popover_item"
          onClick={(event) => onShowModal(event, ModalType.DELETE_LINK)}
        >
          삭제하기
        </div>
        <div
          className="kebab_popover_item"
          onClick={(event) => onShowModal(event, ModalType.ADD)}
        >
          폴더에 추가
        </div>
      </div>

      {showModal && (
        <Modal>
          {<BaseModal modalType={modalType} onClose={onCloseModal} />}
        </Modal>
      )}
    </>
  );
};

export default KebabPopover;
