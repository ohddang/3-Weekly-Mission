import "../modal.css";

const AddModal = () => {
  const onClick = () => {};

  // TODO : css 수정
  return (
    <>
      <div className="modal_title">폴더에 추가</div>
      <div className="modal_sub_title">링크 주소</div>
      <div className="modal_add_container">
        <div className="modal_add_folder">
          <div className="folder_info">
            <div className="folder_name">코딩팁</div>
            <div className="folder_link_count">7개 링크</div>
          </div>
          <img src="./images/check.svg" className="folder_select_icon" />
        </div>
        <div className="modal_add_folder">
          <div className="folder_info">
            <div className="folder_name">채용 사이트</div>
            <div className="folder_link_count">12개 링크</div>
          </div>

          <img src="./images/check.svg" className="folder_select_icon" />
        </div>
        <div className="modal_add_folder">
          <div className="folder_info">
            <div className="folder_name">유용한 글</div>
            <div className="folder_link_count">30개 링크</div>
          </div>
          <img src="./images/check.svg" className="folder_select_icon" />
        </div>
        <div className="modal_add_folder">
          <div className="folder_info">
            <div className="folder_name">나만의 장소</div>
            <div className="folder_link_count">3개 링크</div>
          </div>
          <img src="./images/check.svg" className="folder_select_icon" />
        </div>
      </div>
      <div className="modal_button" onClick={onClick}>
        추가히기
      </div>
    </>
  );
};

export default AddModal;
