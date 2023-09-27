import { useLocation } from "react-router-dom";
import { HeaderContainer, Link } from "./Header.styled";

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <Link to="/" $active={location.pathname === "/"}>
        Home
      </Link>
      <Link to="/catalog" $active={location.pathname === "/catalog"}>
        Catalog
      </Link>
      <Link to={"/favorites"} $active={location.pathname === "/favorites"}>
        Favorites
      </Link>
    </HeaderContainer>
  );
};
