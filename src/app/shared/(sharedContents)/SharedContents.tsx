import "@/app/contents.css";

import SearchBar from "@/components/contents/searchBar/SearchBar";
import CardList from "@/components/contents/cardList/cardList";
import { FolderLink } from "@/api/api";

const SharedContents = async ({ folderLinks }: { folderLinks: FolderLink[] }) => {
  return (
    <section className="contents">
      <div className="card_list_container">
        <SearchBar isFolder={false} />
        {folderLinks.length === 0 ? (
          <div className="empty_card_list">저장된 링크가 없습니다.</div>
        ) : (
          <ul className="card_list">
            <CardList folderLinks={folderLinks} isFunctional={false} />
          </ul>
        )}
      </div>
    </section>
  );
};

export default SharedContents;
