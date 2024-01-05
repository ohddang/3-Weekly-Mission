const FolderHeader = () => {
  return (
    <>
      <div className="folder_title_container">
        <div className="folder_title_input_container">
          <img src="./images/link.svg" className="link_image" />
          <input
            className="folder_title_input"
            placeholder="링크를 추가해 보세요."
          />
          <div className="folder_title_button">
            <div>추가하기</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderHeader;
