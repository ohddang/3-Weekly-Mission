import "./index.css";
import "./common.css";
import Footer from "./components/footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
