"use client";

import { useRef } from "react";

// interface SearchBarProps {
//   handleChange: (filter: string) => void;
// }

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    // if (inputRef.current) handleChange(inputRef.current?.value);
  };

  const onClickDelete = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      // handleChange("");
    }
  };

  return (
    <div className="search_bar">
      <img src="/images/search.svg" />
      <input className="search_input" placeholder="링크를 검색해 보세요." onChange={onChange} ref={inputRef} />
      <img src="/images/modal-close.png" className="search_delete" alt="delete" onClick={onClickDelete} />
    </div>
  );
};

export default SearchBar;
