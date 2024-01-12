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

const BaseModal = (props) => {
  const { modalType, onClose, params } = props;

  const onModal = (event) => {
    event.stopPropagation();
  };

  const onModalClose = (event) => {
    event.stopPropagation();

    onClose();
  };

  useEffect(() => {
    document.addEventListener("click", onModalClose); // document click event only
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
          <img
            src="/images/modal-close.png"
            className="modal_close"
            onClick={props.onClose}
          />
        </div>
      </div>
    </>
  );
};

export default BaseModal;
