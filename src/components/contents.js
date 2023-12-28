import "./css/common.css";
import "./css/contents.css";
import Cards from "./cards";
import UseFolderInfo from "./hooks/folderInfo";

export default function Contents() {
  const { links } = UseFolderInfo();

  return (
    <>
      <div className="contents">
        <div className="search_bar">
          <img src="/images/search.svg" className="search_image" />
          <input className="search_input"></input>
        </div>
        <div className="card_list">
          <ul>
            <Cards items={links} />
          </ul>
        </div>
      </div>
    </>
  );
}
