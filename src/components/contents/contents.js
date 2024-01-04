import "../css/common.css";
import "./contents.css";
import CardList from "../cardList/cardList";
import useFolderInfo from "../hooks/folderInfo";

import { useLocation } from "react-router-dom";

export default function Contents({ folderInfo }) {
  const location = useLocation();
  const { links } = folderInfo;

  function createCardItems() {
    if (location.pathname.includes("shared")) {
      return (
        <ul className="card_list">
          <CardList items={links} />
        </ul>
      );
    } else {
      return <div className="empty_card_list">저장된 링크가 없습니다.</div>;
    }
  }

  return (
    <>
      <section className="contents">
        <div className="card_list_container">
          <div className="search_bar">
            <img src="/images/search.svg" className="search_image" />
            <input
              className="search_input"
              placeholder="링크를 검색해 보세요."
            ></input>
          </div>
          {createCardItems()}
        </div>
      </section>
    </>
  );
}
