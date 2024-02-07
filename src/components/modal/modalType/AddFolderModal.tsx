import "../modal.css";

const AddFolderModal = () => {
  const onClick = () => {};

  return (
    <>
      <div className="modal_title">폴더 추가</div>
      <input className="modal_input" placeholder="내용 입력" />
      <div className="modal_button" onClick={onClick}>
        추가히기
      </div>
    </>
  );
};

export default AddFolderModal;
