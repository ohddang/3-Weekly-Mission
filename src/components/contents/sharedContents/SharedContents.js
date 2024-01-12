import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CardList from "../cardList/cardList";
import {
  getSelectionFolderLinks,
  setFolderLinksFromItems,
} from "../../../api/api";

const SharedContents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [folderLinks, setFolderLinks] = useState([]);

  const userParam = searchParams.get("user");
  const folderParam = searchParams.get("folder");

  useEffect(() => {
    getSelectionFolderLinks(folderParam, userParam).then((rsp) => {
      if (rsp.data == undefined) return;

      setFolderLinks(setFolderLinksFromItems(rsp.data));
    });
  }, []);

  return (
    <>
      {folderLinks.length === 0 ? (
        <div className="empty_card_list">저장된 링크가 없습니다.</div>
      ) : (
        <ul className="card_list">
          <CardList items={folderLinks} isFunctional={false} />
        </ul>
      )}
    </>
  );
};

export default SharedContents;
