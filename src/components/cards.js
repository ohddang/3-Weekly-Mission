import "./css/cards.css";

export default function Cards(items) {
  let item_list = [];
  console.log("Cards");

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

  items.items.map((item, index) => {
    const { id, createdAt, description, imageSource } = item;

    const newCreatedAt = convertCreateAt(createdAt);
    const createdAtAfter = calculateCreateAtAfter(createdAt);

    item_list.push(
      <li key={id}>
        <div className="card">
          <img src={imageSource} className="card_image" />
          <div className="card_badge_container">
            {/* <div className="card_title">{item.title}</div> */}
            <div className="card_createdAt_after">{createdAtAfter}</div>
            <div className="card_description">{description}</div>
            <div className="card_createdAt">{newCreatedAt}</div>
          </div>
        </div>
      </li>
    );
  });

  return <>{item_list}</>;
}
