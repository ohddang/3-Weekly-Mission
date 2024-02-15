"use client";

import "./modal.css";

import { useEffect } from "react";

import EditModal from "./modalType/EditModal";
import AddFolderModal from "./modalType/AddFolderModal";
import ShareModal from "./modalType/ShareModal";
import DeleteModal from "./modalType/DeleteModal";
import AddModal from "./modalType/AddModal";

export const ModalType = {
  EDIT: 0,
  ADD_FOLDER: 1,
  SHARE: 2,
  DELETE_FOLDER: 3,
  DELETE_LINK: 4,
  ADD: 5,
};

interface BaseModalProps {
  modalType: number;
  onClose: () => void;
  params?: any;
}

const BaseModal: React.FC<BaseModalProps> = (props) => {
  const { modalType, onClose, params } = props;

  const onModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const onModalClose = (event: MouseEvent) => {
    event.stopPropagation();

    onClose();
  };

  useEffect(() => {
    document.addEventListener("click", onModalClose);
    return () => {
      document.removeEventListener("click", onModalClose);
    }; // document click event only
  }, []);

  return (
    <>
      <div className="modal">
        <div className="modal_container" onClick={onModal}>
          {
            {
              [ModalType.EDIT]: <EditModal />,
              [ModalType.ADD_FOLDER]: <AddFolderModal />,
              [ModalType.SHARE]: <ShareModal params={params} />,
              [ModalType.DELETE_FOLDER]: <DeleteModal modalType={modalType} />,
              [ModalType.DELETE_LINK]: <DeleteModal modalType={modalType} />,
              [ModalType.ADD]: <AddModal />,
            }[modalType]
          }
          <img src="/images/modal-close.png" className="modal_close" onClick={props.onClose} />
        </div>
      </div>
    </>
  );
};

export default BaseModal;
