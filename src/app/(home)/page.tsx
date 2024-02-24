import Link from "next/link";
import KakaoDev from "./KakaoDev";
import "../index.css";

const Page = () => {
  return (
    <div>
      <p>
        <Link href="/signin">Signin Page</Link>
      </p>
      <p>
        <Link href="/signup">Signup Page</Link>
      </p>
      <p>
        <Link href="/shared">Shared Page</Link>
      </p>
      <p>
        <Link href="/folder/전체">Folder Page</Link>
      </p>
      <KakaoDev />
    </div>
  );
};

export default Page;
