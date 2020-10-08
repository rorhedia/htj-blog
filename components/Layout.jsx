import CustomNavbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
}
