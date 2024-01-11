import "./folderContents.css";

import { useEffect, useState, useRef } from "react";
import CardList from "../cardList/cardList";
import FolderGroup from "./FolderGroup";

const getFolderGroup = async (user_id = 1) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/folders`
  );
  const rsp = await response.json();
  return rsp;
};

const getAllFolderLinksOfUser = async (user_id = 1) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/links`
  );
  const rsp = await response.json();
  return rsp;
};

const getSelectionFolderLinks = async (folder_id, user_id = 1) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/links?folderId=${folder_id}`
  );
  const rsp = await response.json();
  return rsp;
};

// component
const FolderContents = () => {
  const [folderGroup, setFolderGroup] = useState([]);
  const [folderLinks, setFolderLinks] = useState([]);
  const [toggleIndex, setToggleIndex] = useState("");
  const titleRef = useRef();

  // rest api로 받아온 데이터로 상태값을 변경
  const setFolderLinksFromItems = (links) => {
    const folderLinks = links.map((link) => {
      return {
        id: link.id,
        created_at: link.created_at,
        url: link.url,
        description: link.description,
        image_source: link.image_source,
      };
    });
    setFolderLinks(folderLinks);
  };

  // 폴더를 클릭했을 때 해당하는 링크목록을 가져옴
  const onClickFolderGroup = (event, key) => {
    event.preventDefault();
    setToggleIndex(key);

    const selectionFolder = folderGroup.find((folder) => key === folder.id);
    titleRef.current.innerHTML = selectionFolder.name;

    if (selectionFolder.linkCount > 0) {
      selectionFolder.id === "전체"
        ? getAllFolderLinksOfUser().then((rsp) =>
            setFolderLinksFromItems(rsp.data)
          )
        : getSelectionFolderLinks(selectionFolder.id).then((rsp) =>
            setFolderLinksFromItems(rsp.data)
          );
    } else {
      setFolderLinks([]);
    }
  };

  // 생성 시 폴더 목록을 가져옴
  useEffect(() => {
    getFolderGroup().then((rsp) => {
      let allLinkCount = 0;
      const folderGroupInfo = rsp.data.map((folder) => {
        allLinkCount += folder.link.count;

        return {
          id: folder.id,
          name: folder.name,
          linkCount: folder.link.count,
        };
      });

      // 서버에서 넣어주는 데이터가 없어서 임시로 넣어줌
      folderGroupInfo.unshift({
        id: "전체", // 임시키 값
        name: "전체",
        linkCount: allLinkCount,
      });
      setFolderLinks([]);

      setFolderGroup(folderGroupInfo);
    });
  }, []);

  return (
    <>
      <div className="folder_group_container">
        <FolderGroup
          folderGroup={folderGroup}
          onClickFolderGroup={onClickFolderGroup}
          toggleIndex={toggleIndex}
        />
        <img src="/images/add.svg" className="add_folder_button" />
      </div>
      <div className="folder_group_title">
        <div className="folder_title" ref={titleRef}></div>
        {"전체" !== toggleIndex && (
          <div className="folder_editor">
            <div>
              <img src="/images/share.svg" />
              <div>공유</div>
            </div>
            <div>
              <img src="/images/pen.svg" />
              <div>이름변경</div>
            </div>
            <div>
              <img src="/images/delete.svg" />
              <div>삭제</div>
            </div>
          </div>
        )}
      </div>
      <div className="add_folder_button_floating">
        <div>폴더 추가</div>
        <img src="/images/floating_add.svg" />
      </div>
      {folderLinks.length === 0 ? (
        <div className="empty_card_list">저장된 링크가 없습니다.</div>
      ) : (
        <ul className="card_list">
          <CardList items={folderLinks} isFunctional={true} />
        </ul>
      )}
    </>
  );
};

export default FolderContents;
