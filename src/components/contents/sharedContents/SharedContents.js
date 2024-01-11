import { useState, useEffect } from "react";

import CardList from "../cardList/cardList";
import { getFolderInfo } from "../../header/header";

// async function getFolderInfo() {
//   const response = await fetch(
//     "https://bootcamp-api.codeit.kr/api/sample/folder" // sample api
//   );
//   const rsp = await response.json();
//   const rspFolder = rsp.folder;

//   return {
//     name: rspFolder.name,
//     owner: rspFolder.owner,
//     links: rspFolder.links,
//   };
// }

const SharedContents = () => {
  const [sharedLinks, setSharedLinks] = useState([]);

  useEffect(() => {
    getFolderInfo().then((result) => {
      const { links } = result;

      const sharedLinks = links.map((link) => {
        return {
          id: link.id,
          created_at: link.createdAt,
          url: link.url,
          description: link.description,
          image_source: link.imageSource,
        };
      });
      setSharedLinks(sharedLinks);
    });
  }, []);

  return (
    <>
      <ul className="card_list">
        <CardList items={sharedLinks} isFunctional={false} />
      </ul>
    </>
  );
};

export default SharedContents;
