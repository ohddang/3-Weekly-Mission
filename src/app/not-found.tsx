import "./index.css";

import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <br />
      <p>
        <Link href="/shared">Shared Page</Link>
      </p>
      <br />
      <p>
        <Link href="/folder/전체">Folder Page</Link>
      </p>
    </div>
  );
}
