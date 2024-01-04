import { useNavigate } from "react-router-dom";

const Home = (folderInfo) => {
  const navigate = useNavigate();
  const rspFolder = folderInfo.folderInfo;

  if (rspFolder?.links != undefined) {
    rspFolder?.links.length > 0 ? navigate("/shared") : navigate("/folder");
  }

  return <></>;
};

export default Home;
