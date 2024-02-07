interface FolderGroupProps {
  folderGroup: { id: string; name: string }[];
  onClickFolderGroup: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => void;
  toggleIndex: string;
}

const FolderGroup: React.FC<FolderGroupProps> = ({ folderGroup, onClickFolderGroup, toggleIndex }) => {
  const createFolderGroup = () => {
    return folderGroup.map((folder) => {
      const toggleClass = toggleIndex === folder.id ? "folder_group_item folder_toggle" : "folder_group_item";

      return (
        <li className={toggleClass} key={folder.id} onClick={(event) => onClickFolderGroup(event, folder.id)}>
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
