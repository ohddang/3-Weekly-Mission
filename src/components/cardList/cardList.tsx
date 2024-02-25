"use client";

import "./cardList.css";
import "@/app/index.css";

import { useState } from "react";
import KebabPopover from "./KebebPopover";
import { FolderLink } from "@/api/api";
import { calculateCreateAtAfter } from "@/utils/calculateDate";

export interface CardListProps {
  folderLinks: FolderLink[];
  isFunctional: boolean;
}

const CardList = ({ folderLinks, isFunctional }: CardListProps) => {
  const [popoverKey, setPopoverKey] = useState<number>(0);

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

  const onCloseKebabPopover: VoidFunction = () => {
    setPopoverKey(0);
  };

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

  return (
    <>
      <ul className="card_list">{item_list}</ul>
    </>
  );
};

export default CardList;
