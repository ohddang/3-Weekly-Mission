"use client";

import "./modal.css";

import { useEffect } from "react";

import EditModal from "./modalType/EditModal";
import AddFolderModal from "./modalType/AddFolderModal";
import ShareModal from "./modalType/ShareModal";
import DeleteModal from "./modalType/DeleteModal";
import AddModal from "./modalType/AddModal";

export enum ModalType {
  EDIT = 0,
  ADD_FOLDER,
  SHARE,
  DELETE_FOLDER,
  DELETE_LINK,
  ADD,
}
// export type modalType = (typeof ModalType)[keyof typeof ModalType];

interface BaseModalProps {
  modalType: ModalType;
  folderId?: string;
  onClose: VoidFunction;
}

const BaseModal = ({ modalType, folderId, onClose }: BaseModalProps) => {
  const onClickModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
        <div className="modal_container" onClick={onClickModal}>
          {
            {
              [ModalType.EDIT]: <EditModal />,
              [ModalType.ADD_FOLDER]: <AddFolderModal />,
              [ModalType.SHARE]: <ShareModal folderId={folderId || ""} />,
              [ModalType.DELETE_FOLDER]: <DeleteModal modalType={modalType} />,
              [ModalType.DELETE_LINK]: <DeleteModal modalType={modalType} />,
              [ModalType.ADD]: <AddModal />,
            }[modalType]
          }
          <img src="/images/modal-close.png" className="modal_close" onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default BaseModal;
