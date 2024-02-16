"use client";

import "@/app/header.css";

import { useState, useRef, useEffect } from "react";
import ModalPortal from "@/components/modal/ModalPortal";
import { BaseModal, ModalType } from "@/components/modal";

import Image from "next/image";

const FolderHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(0);
  const linkRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const onShowModal = (event: React.MouseEvent<HTMLDivElement | MouseEvent>, modalType: number) => {
    event.stopPropagation();

    if (linkRef.current && linkRef.current.value === "") {
      alert("링크를 입력해주세요.");
      return;
    } else {
      setShowModal(true);
      setModalType(modalType);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (titleRef.current) {
          if (entry.target.className === "title_container") {
            if (entry.intersectionRatio <= 0) {
              titleRef.current.classList.add("move_to_bottom");
            } else {
              titleRef.current.classList.remove("move_to_bottom");
              titleRef.current.classList.remove("display_none");
            }
          } else if (entry.target.className === "footer_list") {
            if (entry.intersectionRatio > 0) {
              titleRef.current.classList.add("move_to_bottom", "display_none");
            } else {
              titleRef.current.classList.remove("display_none");
            }
          } else if (entry.target.className === "navigation_container") {
            if (entry.intersectionRatio > 0) {
              titleRef.current.classList.remove("move_to_bottom");
            }
          }
        }
      });
    }, {});

    const navi = document.querySelector(".navigation_container");
    if (navi) {
      io.observe(navi);
    }

    const footer = document.querySelector(".footer_list");
    if (footer) {
      io.observe(footer);
    }

    const title = document.querySelector(".title_container");
    if (title) {
      io.observe(title);
    }
  }, []);

  return (
    <>
      <section className="title_container">
        <div className="folder_title_container" ref={titleRef}>
          <div className="folder_title_input_container">
            <Image src="/images/link.svg" className="link_image" alt="link" width="16" height="16" />
            <input ref={linkRef} className="folder_title_input" placeholder="링크를 추가해 보세요." />
            <div className="folder_title_button" onClick={(event) => onShowModal(event, ModalType.ADD)}>
              <div>추가하기</div>
            </div>
          </div>
        </div>
        {showModal && <ModalPortal>{<BaseModal modalType={modalType} onClose={onCloseModal} />}</ModalPortal>}
      </section>
    </>
  );
};

export default FolderHeader;
