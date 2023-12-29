import "./css/common.css";
import "./css/contents.css";
import Cards from "./cards";
import UseFolderInfo from "./hooks/folderInfo";

export default function Contents() {
  const { links } = UseFolderInfo();

  return (
    <>
      <div className="contents">
        <div className="card_list_container">
          <div className="search_bar">
            <img src="/images/search.svg" className="search_image" />
            <input
              className="search_input"
              placeholder="링크를 검색해 보세요."
            ></input>
          </div>
          <ul className="card_list">
            <Cards items={links} />
          </ul>
        </div>
      </div>
    </>
  );
}
