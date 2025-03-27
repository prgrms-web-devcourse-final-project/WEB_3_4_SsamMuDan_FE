import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-pretendard">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
