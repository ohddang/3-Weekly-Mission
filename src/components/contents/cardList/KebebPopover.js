import { useState } from "react";

import Modal from "../../modal/modal";
import BaseModal, { ModalType } from "../../modal/BaseModal";

const KebabPopover = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(0);

  const onClickDelete = (event) => {
    event.stopPropagation();

    setShowModal(true);
    setModalType(ModalType.DELETE_FOLDER);
  };

  const onClickAdd = (event) => {
    event.stopPropagation();

    setShowModal(true);
    setModalType(ModalType.ADD);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="kebab_popover">
        <div className="kebab_popover_item" onClick={onClickDelete}>
          삭제하기
        </div>
        <div className="kebab_popover_item" onClick={onClickAdd}>
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
