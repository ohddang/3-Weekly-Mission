import "../css/common.css";
import "./contents.css";
import CardList from "../cardList/cardList";
import useFolderInfo from "../hooks/folderInfo";

export default function Contents({ folderInfo }) {
  const { links } = folderInfo;

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
          <ul className="card_list">
            <CardList items={links} />
          </ul>
        </div>
      </section>
    </>
  );
}
