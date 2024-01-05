import "./folderContents.css";

import { useEffect, useState } from "react";
import CardList from "../cardList/cardList";

const getFolderGroup = async () => {
  const user_id = 1;
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/folders`
  );
  const rsp = await response.json();
  return rsp;
};

const getAllFolderLinks = async () => {
  const user_id = 1;
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/links`
  );
  const rsp = await response.json();
  return rsp;
};

const getSelectionFolderLinks = async (folder_id) => {
  const user_id = 1;
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/links?folderId=${folder_id}`
  );
  const rsp = await response.json();
  return rsp;
};

const FolderContents = () => {
  const [folderGroup, setFolderGroup] = useState([]);
  const [folderLinks, setFolderLinks] = useState([]);

  const createFolderLinks = (links) => {
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

  const onClickFolderGroup = (event, key) => {
    event.preventDefault();

    const selection_folder = folderGroup.find((folder) => key === folder.id);

    //
    // update title layout
    //

    if (selection_folder.linkCount > 0) {
      selection_folder.id === "전체"
        ? getAllFolderLinks().then((rsp) => createFolderLinks(rsp.data))
        : getSelectionFolderLinks(selection_folder.id).then((rsp) =>
            createFolderLinks(rsp.data)
          );
    }
  };

  const createFolderGroup = () => {
    return folderGroup.map((folder) => {
      return (
        <li
          key={folder.id}
          onClick={(event) => onClickFolderGroup(event, folder.id)}
        >
          <div>{folder.name}</div>
        </li>
      );
    });
  };

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
      setFolderGroup(folderGroupInfo);
    });
  }, []);

  return (
    <>
      <div className="folder_contents">
        <ul className="folder_group">{createFolderGroup()}</ul>
        <div className="folder_group_title">
          <div className="folder_title">Title</div>
          <div className="folder_editor">
            <div>공유</div>
            <div>이름변경</div>
            <div>삭제</div>
          </div>
        </div>
        <ul className="card_list">
          <CardList items={folderLinks} />
        </ul>
        {/* <div className="empty_card_list">저장된 링크가 없습니다.</div> */}
      </div>
    </>
  );
};

export default FolderContents;
