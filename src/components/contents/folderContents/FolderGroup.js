import { useState } from "react";

const FolderGroup = ({ folderGroup, onClickFolderGroup, toggleIndex }) => {
  const createFolderGroup = () => {
    return folderGroup.map((folder) => {
      const toggleClass =
        toggleIndex === folder.id
          ? "folder_group_item folder_toggle"
          : "folder_group_item";

      return (
        <li
          className={toggleClass}
          key={folder.id}
          onClick={(event) => onClickFolderGroup(event, folder.id)}
        >
          <div>{folder.name}</div>
        </li>
      );
    });
  };

  return (
    <>
      <ul className="folder_group">{createFolderGroup()}</ul>
    </>
  );
};

export default FolderGroup;
