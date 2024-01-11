import "./cardList.css";

import { useState, useEffect } from "react";

export default function CardList({ items, isFunctional }) {
  const [popoverKey, setPopoverKey] = useState(null);

  function calculateCreateAtAfter(createAt) {
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
  }

  function convertCreateAt(createAt) {
    const [year, month, day] = createAt.slice(0, 10).split("-");
    return `${year}. ${Number(month)}. ${Number(day)}`;
  }

  function isImageSourceUrl(imageSource) {
    const extensions = ["jpg", "png", "jpeg", "gif", "svg"];

    if (imageSource == null) {
      return false;
    } else {
      const ext = imageSource.split(".").pop();
      return extensions.find((item) => ext.includes(item)).length > 0
        ? true
        : false;
    }
  }

  function onClickCard(...args) {
    window.open(args[1]);
  }

  const onKebabClick = (event, id) => {
    event.stopPropagation();

    popoverKey === id ? setPopoverKey(null) : setPopoverKey(id);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setPopoverKey(null);
    });
  });

  const item_list = items.map((item, index) => {
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
            {isFunctional && (
              <img src="/images/star.svg" className="star_image" />
            )}
          </div>
          <div className="card_badge_container">
            <div className="card_createdAt_after">{createdAtAfter}</div>
            <div className="card_description">{description}</div>
            <div className="card_createdAt">{newCreatedAt}</div>
            {isFunctional && (
              <img
                src="/images/kebab.svg"
                className="kebab_image"
                onClick={(event) => onKebabClick(event, id)}
              />
            )}
          </div>
          {id === popoverKey && (
            <div className="kebab_popover">
              <div className="kebab_popover_item">수정하기</div>
              <div className="kebab_popover_item">폴더에 추가</div>
            </div>
          )}
        </div>
      </li>
    );
  });

  return <>{item_list}</>;
}
