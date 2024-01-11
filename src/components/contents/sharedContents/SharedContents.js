import { useState, useEffect } from "react";

import CardList from "../cardList/cardList";
import { getFolderInfo } from "../../header/header";

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
