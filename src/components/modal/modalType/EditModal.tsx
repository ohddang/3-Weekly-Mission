import "../modal.css";

const EditModal = () => {
  const onClick = () => {};

  return (
    <>
      <div className="modal_title">폴더 이름 변경</div>
      <input className="modal_input" placeholder="내용 입력" />
      <div className="modal_button" onClick={onClick}>
        변경하기
      </div>
    </>
  );
};

export default EditModal;
