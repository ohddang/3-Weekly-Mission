import Folder from "../../pages/Folder";
import "../../styles/common.css";
import "./header.css";
import SharedHeader from "./sharedHeader/SharedHeader";
import FolderHeader from "./folderHeader/FolderHeader";

import { useLocation } from "react-router-dom";

export async function getFolderInfo() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder" // sample api
  );
  const rsp = await response.json();
  const rspFolder = rsp.folder;

  return {
    name: rspFolder.name,
    owner: rspFolder.owner,
    links: rspFolder.links,
  };
}

export default function Header() {
  const location = useLocation();
  const isShared = location.pathname.includes("shared");

  return (
    <>
      <header>
        <section className="title_container">
          {isShared ? <SharedHeader /> : <FolderHeader />}
        </section>
      </header>
    </>
  );
}
