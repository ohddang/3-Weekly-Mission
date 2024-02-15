import "./index.css";
import "./common.css";
import Footer from "./components/footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
