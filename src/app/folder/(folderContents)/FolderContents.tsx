"use client";

import "./folderContents.css";
import "../../contents.css";

import { useState, useRef } from "react";

import { FolderLink } from "../../../api/api";
import CardList from "../../../components/contents/cardList/cardList";
import FolderGroup from "./FolderGroup";
import SearchBar from "../../../components/contents/searchBar/SearchBar";

import ModalPortal from "../../../components/modal/ModalPortal";
import { BaseModal, ModalType } from "../../../components/modal";

import { useSearchParams } from "next/navigation";

// component
const FolderContents = ({ folderGroup, folderLinks }: { folderGroup: any; folderLinks: FolderLink[] }) => {
  const [folderId, setFolderId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(0);
  const [modalParams, setModalParams] = useState({});

  const titleRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  const filter = searchParams.get("search");
  const filteredLinks =
    filter === null
      ? folderLinks
      : folderLinks.filter((link: FolderLink) => {
          return link.title?.includes(filter) || link.description?.includes(filter) || link.url?.includes(filter);
        });

  const updateModalParams = (modalType: number) => {
    switch (modalType) {
      case ModalType.SHARE:
        setModalParams({
          userId: 1, // TODO : context
          folderId: folderId,
        });
        break;
      default:
        break;
    }
  };

  const onShowModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, modalType: number) => {
    event.stopPropagation();

    updateModalParams(modalType);
    setShowModal(true);
    setModalType(modalType);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="contents">
        <div className="card_list_container">
          <SearchBar isFolder={true} />
          <div className="folder_group_container">
            <FolderGroup folderGroup={folderGroup} />
            <img
              src="/images/add.svg"
              className="add_folder_button"
              onClick={(event) => onShowModal(event, ModalType.ADD_FOLDER)}
            />
          </div>
          <div className="folder_group_title">
            <div className="folder_title" ref={titleRef}></div>
            {"전체" !== folderId && (
              <div className="folder_editor">
                <div onClick={(event) => onShowModal(event, ModalType.SHARE)}>
                  <img src="/images/share.svg" />
                  <div>공유</div>
                </div>
                <div onClick={(event) => onShowModal(event, ModalType.EDIT)}>
                  <img src="/images/pen.svg" />
                  <div>이름변경</div>
                </div>
                <div onClick={(event) => onShowModal(event, ModalType.DELETE_FOLDER)}>
                  <img src="/images/delete.svg" />
                  <div>삭제</div>
                </div>
              </div>
            )}
          </div>
          <div className="add_folder_button_floating" onClick={(event) => onShowModal(event, ModalType.ADD_FOLDER)}>
            <div>폴더 추가</div>
            <img src="/images/floating_add.svg" />
          </div>
          {filteredLinks.length === 0 ? (
            <div className="empty_card_list">저장된 링크가 없습니다.</div>
          ) : (
            <ul className="card_list">
              <CardList folderLinks={filteredLinks} isFunctional={true} />
            </ul>
          )}

          {showModal && (
            <ModalPortal>{<BaseModal modalType={modalType} onClose={onCloseModal} params={modalParams} />}</ModalPortal>
          )}
        </div>
      </section>
    </>
  );
};

export default FolderContents;
