import "components/contents/contents.css";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CardList from "components/contents/cardList/cardList";
import { getSelectionFolderLinks, setFolderLinksFromItems } from "api/api";
import SearchBar from "components/contents/searchBar/SearchBar";

const SharedContents = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [folderLinks, setFolderLinks] = useState([]);

  const userParam = Number(searchParams.get("user"));
  const folderParam = searchParams.get("folder");

  useEffect(() => {
    if (userParam == undefined || folderParam == undefined) return;

    getSelectionFolderLinks(folderParam, userParam).then((rsp) => {
      if (rsp.data == undefined) return;

      setFolderLinks(setFolderLinksFromItems(rsp.data));
    });
  }, []);

  return (
    <section className="contents">
      <div className="card_list_container">
        <SearchBar />
        {folderLinks.length === 0 ? (
          <div className="empty_card_list">저장된 링크가 없습니다.</div>
        ) : (
          <ul className="card_list">
            <CardList items={folderLinks} isFunctional={false} />
          </ul>
        )}
      </div>
    </section>
  );
};

export default SharedContents;
