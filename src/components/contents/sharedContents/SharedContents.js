import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CardList from "../cardList/cardList";
import { getSelectionFolderLinks } from "../../../api/api";

const SharedContents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [folderLinks, setFolderLinks] = useState([]);

  const userParam = searchParams.get("user");
  const folderParam = searchParams.get("folder");

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

  useEffect(() => {
    getSelectionFolderLinks(folderParam, userParam).then((rsp) => {
      if (rsp.data == undefined) return;

      setFolderLinksFromItems(rsp.data);
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
