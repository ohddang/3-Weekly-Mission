"use client";

import "./folderContents.css";
import "@/app/contents.css";

import { useState, useRef } from "react";

import { FolderLink } from "@/api/api";
import CardList from "@/components/contents/cardList/cardList";
import FolderGroup from "./FolderGroup";
import SearchBar from "@/components/contents/searchBar/SearchBar";

import ModalPortal from "@/components/modal/ModalPortal";
import { BaseModal, ModalType } from "@/components/modal";

import { usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";

// component
const FolderContents = ({ folderGroup, folderLinks }: { folderGroup: any; folderLinks: FolderLink[] }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<number>(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const folderId = pathname.split("/")[2];

  const filter = searchParams.get("search");
  const filteredLinks =
    filter === null
      ? folderLinks
      : folderLinks.filter((link: FolderLink) => {
          return link.title?.includes(filter) || link.description?.includes(filter) || link.url?.includes(filter);
        });

  const onShowModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, modalType: number) => {
    event.stopPropagation();

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
            <Image
              src="/images/add.svg"
              className="add_folder_button"
              onClick={(event) => onShowModal(event, ModalType.ADD_FOLDER)}
              alt="add_folder"
              width="16"
              height="16"
            />
          </div>
          <div className="folder_group_title">
            <div className="folder_title"></div>
            {"전체" !== decodeURIComponent(folderId) && (
              <div className="folder_editor">
                <div onClick={(event) => onShowModal(event, ModalType.SHARE)}>
                  <Image src="/images/share.svg" alt="share" width="16" height="16" />
                  <div>공유</div>
                </div>
                <div onClick={(event) => onShowModal(event, ModalType.EDIT)}>
                  <Image src="/images/pen.svg" alt="pen" width="16" height="16" />
                  <div>이름변경</div>
                </div>
                <div onClick={(event) => onShowModal(event, ModalType.DELETE_FOLDER)}>
                  <Image src="/images/delete.svg" alt="delete" width="16" height="16" />
                  <div>삭제</div>
                </div>
              </div>
            )}
          </div>
          <div className="add_folder_button_floating" onClick={(event) => onShowModal(event, ModalType.ADD_FOLDER)}>
            <div>폴더 추가</div>
            <Image src="/images/floating_add.svg" alt="add" width="16" height="16" />
          </div>
          {filteredLinks.length === 0 ? (
            <div className="empty_card_list">저장된 링크가 없습니다.</div>
          ) : (
            <ul className="card_list">
              <CardList folderLinks={filteredLinks} isFunctional={true} />
            </ul>
          )}

          {showModal && (
            <ModalPortal>{<BaseModal modalType={modalType} onClose={onCloseModal} folderId={folderId} />}</ModalPortal>
          )}
        </div>
      </section>
    </>
  );
};

export default FolderContents;
