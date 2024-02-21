"use client";

import { useState } from "react";

import ModalPortal from "@/components/modal/ModalPortal";
import { BaseModal, ModalType } from "@/components/modal";

interface KebabPopoverProps {
  onClose: VoidFunction;
}

const KebabPopover = ({ onClose }: KebabPopoverProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(ModalType.EDIT);

  const onShowModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, modalType: number) => {
    event.stopPropagation();

    setShowModal(true);
    setModalType(modalType);
  };

  const onCloseModal: VoidFunction = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      <div className="kebab_popover">
        <div className="kebab_popover_item" onClick={(event) => onShowModal(event, ModalType.DELETE_LINK)}>
          삭제하기
        </div>
        <div className="kebab_popover_item" onClick={(event) => onShowModal(event, ModalType.ADD)}>
          폴더에 추가
        </div>
      </div>

      {showModal && <ModalPortal>{<BaseModal modalType={modalType} onClose={onCloseModal} />}</ModalPortal>}
    </>
  );
};

export default KebabPopover;
