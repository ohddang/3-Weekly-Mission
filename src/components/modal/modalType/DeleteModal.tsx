"use client";

import "../modal.css";

import { useEffect, useState } from "react";
import { ModalType } from "../BaseModal";

interface DeleteModalProps {
  modalType: ModalType;
}

const DeleteModal = ({ modalType }: DeleteModalProps) => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const onClick = () => {};

  useEffect(() => {
    switch (modalType) {
      case ModalType.DELETE_FOLDER:
        setTitle("폴더 삭제");
        setSubTitle("폴더명");
        break;
      case ModalType.DELETE_LINK:
        setTitle("링크 삭제");
        setSubTitle("https://www.delete-link.com");
        break;
      default:
        break;
    }
  }, [modalType]);

  return (
    <>
      <div className="modal_title">{title}</div>
      <div className="modal_sub_titlet">{subTitle}</div>
      <div className="modal_button modal_button_delete" onClick={onClick}>
        삭제하기
      </div>
    </>
  );
};

export default DeleteModal;
