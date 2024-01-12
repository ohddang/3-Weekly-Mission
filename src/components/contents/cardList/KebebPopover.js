import { useState } from "react";

import Modal from "components/modal/modal";
import BaseModal, { ModalType } from "components/modal/BaseModal";

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
