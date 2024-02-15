"use client";

import "./cardList.css";
import "../../../index.css";

import { useState, useEffect } from "react";
import KebabPopover from "./KebebPopover";
import { FolderLink } from "../../../api/api";

export interface CardListProps {
  // id: number;
  // created_at: string;
  // url: string;
  // title: string;
  // description: string;
  // image_source: string;
  folderLinks: FolderLink[];

  isFunctional: boolean;
}

const CardList: React.FC<CardListProps> = ({ folderLinks, isFunctional }) => {
  const [popoverKey, setPopoverKey] = useState<number>(0);

  const calculateCreateAtAfter = (createAt: string) => {
    const today = new Date();
    const createAtDate = new Date(createAt);
    const diff = today.getTime() - createAtDate.getTime();
    const diffMin = Math.floor(diff / (1000 * 60));
    const diffHour = Math.floor(diff / (1000 * 3600));
    const diffDay = Math.floor(diff / (1000 * 3600 * 24));
    const diffMonth = Math.floor(diff / (1000 * 3600 * 24 * 30));

    if (diffMonth > 12) {
      return `${Math.floor(diffMonth / 12)} years ago`;
    } else if (diffMonth === 12) {
      return `1 year ago`;
    } else if (diffMonth < 12 && diffDay > 31) {
      return `${diffMonth} months ago`;
    } else if (diffDay === 31) {
      return `1 month ago`;
    } else if (diffDay < 31 && diffHour > 24) {
      return `${diffDay} days ago`;
    } else if (diffHour === 24) {
      return `1 day ago`;
    } else if (diffHour < 24 && diffMin > 60) {
      return `${diffHour} hours ago`;
    } else if (diffMin === 60) {
      return `1 hour ago`;
    } else if (diffMin < 60) {
      return `${diffMin} minutes ago`;
    } else if (diffMin < 2) {
      return `1 minute age`;
    }
  };

  const convertCreateAt = (createAt: string) => {
    const [year, month, day] = createAt.slice(0, 10).split("-");
    return `${year}. ${Number(month)}. ${Number(day)}`;
  };

  const isImageSourceUrl = (imageSource: string) => {
    const extensions = ["jpg", "png", "jpeg", "gif", "svg"];

    if (imageSource == null) {
      return false;
    } else {
      const ext = imageSource.split(".").pop();
      if (ext == undefined) return false;
      const extFind = extensions.find((item: string) => ext.includes(item));
      if (extFind == undefined) return false;

      return extFind.length > 0 ? true : false;
    }
  };

  const onClickCard = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
    if (popoverKey) return;

    window.open(url);
  };

  const onClickKebab = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    event.stopPropagation();

    popoverKey === id ? setPopoverKey(0) : setPopoverKey(id);
  };

  const onCloseKebabPopover = () => {
    setPopoverKey(0);
  };

  const onClick = () => {
    setPopoverKey(0);
  };

  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  const item_list = folderLinks.map((item, _index) => {
    const { id, created_at, url, description, image_source } = item;

    const newCreatedAt = convertCreateAt(created_at);
    const createdAtAfter = calculateCreateAtAfter(created_at);
    const isImageUrl = isImageSourceUrl(image_source);

    return (
      <li key={id}>
        <div className="card" onClick={(event) => onClickCard(event, url)}>
          <div className="card_image_container">
            {isImageUrl ? (
              <img src={image_source} className="card_image" />
            ) : (
              <img src="/images/default_card.svg" className="card_image_none" />
            )}
            {isFunctional && <img src="/images/star.svg" className="star_image" />}
          </div>
          <div className="card_badge_container">
            <div className="card_createdAt_after">{createdAtAfter}</div>
            <div className="card_description">{description}</div>
            <div className="card_createdAt">{newCreatedAt}</div>
            {isFunctional && (
              <img src="/images/kebab.svg" className="kebab_image" onClick={(event) => onClickKebab(event, id)} />
            )}
          </div>
          {id === popoverKey && <KebabPopover onClose={onCloseKebabPopover} />}
        </div>
      </li>
    );
  });

  return <>{item_list}</>;
};

export default CardList;
