import "./contents.css";

import { useLocation } from "react-router-dom";
import SharedContents from "./sharedContents/SharedContents";
import FolderContents from "./folderContents/FolderContents";

export default function Contents() {
  const location = useLocation();

  const isShared = location.pathname.includes("shared");

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
          {isShared ? <SharedContents /> : <FolderContents />}
        </div>
      </section>
    </>
  );
}
