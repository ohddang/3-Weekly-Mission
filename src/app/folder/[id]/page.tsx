import FolderContainer from "../(folderContents)/FolderContainer";

export default async function Folder({ params: { id } }: { params: { id: string } }) {
  return <FolderContainer id={id} />;
}
