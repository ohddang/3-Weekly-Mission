import "../contents.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import SearchBar from "../searchBar/SearchBar";
import CardList from "../cardList/cardList";
import { FolderLink, getSelectionFolderLinks, setFolderLinksFromItems } from "../../../api/api";

const getFolderLink = async (userParam: number, folderParam: string) => {
  // const router = useRouter();
  // const userParam = Number(router.query.user); //Number(searchParams.get("user"));
  // const folderParam = String(router.query.folder); // searchParams.get("folder");

  if (userParam == undefined || folderParam == undefined) return [];

  const response = await getSelectionFolderLinks(folderParam, userParam);

  if (response.data == undefined) return [];
  return setFolderLinksFromItems(response.data);

  // const filteredLinks = results.filter((link: FolderLink) => {
  //   link.title.includes(searchText) || link.description.includes(searchText) || link.url.includes(searchText);
  // });
};

const SharedContents = async ({ userParam, folderParam }: { userParam: number; folderParam: string }) => {
  const searchFilterChange = (filter: string) => {
    console.log("filter change");
  };

  const filterFolderLinks = await getFolderLink(userParam, folderParam);

  return (
    <section className="contents">
      <div className="card_list_container">
        <SearchBar />
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
