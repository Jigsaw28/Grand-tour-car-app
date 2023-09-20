import { NavLink } from "react-router-dom"
import { HeaderContainer, Link } from "./Header.styled"

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
            <Link to='/favorites'>Favorites</Link>
        </HeaderContainer>
    )
}