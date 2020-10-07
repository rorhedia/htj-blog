import CustomNavbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <CustomNavbar />
      {children}
    </div>
  );
}
