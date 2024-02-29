import { FolderGroupInfo } from "@/api/api";
import "./folderContents.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface FolderGroupProps {
  folderGroup: FolderGroupInfo[];
}

const FolderGroup = ({ folderGroup }: FolderGroupProps) => {
  const path = decodeURIComponent(usePathname()).split("/")[2];
  const allFolderPath = usePathname().split("/").length === 2;

  const createFolderGroup = () => {
    return folderGroup.map((folder) => {
      const toggleClass =
        path === String(folder.id) || (allFolderPath && folder.id === 0)
          ? "folder_group_item folder_toggle"
          : "folder_group_item";

      return (
        <>
          <li className={toggleClass} key={folder.id}>
            <Link href={`/folder/${folder.id !== 0 ? folder.id : ""}`}>{folder.name}</Link>
          </li>
        </>
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
