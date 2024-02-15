"use client";

import "../contents.css";

import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import { useRouter } from "next/router";

import SearchBar from "../searchBar/SearchBar";
import CardList from "../cardList/cardList";
import { FolderLink, getSelectionFolderLinks, setFolderLinksFromItems } from "../../../api/api";

const SharedContents = () => {
  // const [searchParams, _setSearchParams] = useSearchParams();
  const [folderLinks, setFolderLinks] = useState<FolderLink[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filterFolderLinks, setFilterFolderLinks] = useState<FolderLink[]>([]);

  const searchFilterChange = (filter: string) => {
    setSearchText(filter);
  };

  useEffect(() => {
    if (searchText === "") {
      setFilterFolderLinks(folderLinks);
    } else {
      const filteredLinks = folderLinks.filter((link: FolderLink) => {
        link.title.includes(searchText) || link.description.includes(searchText) || link.url.includes(searchText);
      });
      setFilterFolderLinks(filteredLinks);
    }
  }, [searchText, folderLinks]);

  useEffect(() => {
    const router = useRouter();
    const userParam = Number(router.query.user); //Number(searchParams.get("user"));
    const folderParam = String(router.query.folder); // searchParams.get("folder");

    if (userParam == undefined || folderParam == undefined) return;

    getSelectionFolderLinks(folderParam, userParam).then((rsp) => {
      if (rsp.data == undefined) return;

      setFolderLinks(setFolderLinksFromItems(rsp.data));
    });
  }, []);

  return (
    <section className="contents">
      <div className="card_list_container">
        <SearchBar handleChange={searchFilterChange} />
        {filterFolderLinks.length === 0 ? (
          <div className="empty_card_list">저장된 링크가 없습니다.</div>
        ) : (
          <ul className="card_list">
            <CardList folderLinks={filterFolderLinks} isFunctional={false} />
          </ul>
        )}
      </div>
    </section>
  );
};

export default SharedContents;
