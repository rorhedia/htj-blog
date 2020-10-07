import Link from "next/link";
import { NavItem } from "reactstrap";

export default function CustomLink({ path, children }) {
  return (
    <>
      <NavItem>
        <Link href={path}>
          <a>{children}</a>
        </Link>
      </NavItem>
    </>
  );
}
