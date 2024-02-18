"use client";

import { usePathname, useRouter } from "next/navigation";
import "./searchBar.css";
import { useRef } from "react";

const SearchBar = ({ isFolder }: { isFolder: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const onClickDelete = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      router.push(`${pathname}`);
    }
  };

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = inputRef.current?.value;
    router.push(`${pathname}?search=${searchValue}`);
  };

  return (
    <form className="search_bar" onSubmit={onHandleSubmit}>
      <img src="/images/search.svg" />
      <input name="search" className="search_input" placeholder="링크를 검색해 보세요." ref={inputRef} />
      <img src="/images/modal-close.png" className="search_delete" alt="delete" onClick={onClickDelete} />
    </form>
  );
};

export default SearchBar;
