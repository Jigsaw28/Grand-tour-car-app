import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/catalog'>Catalog</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
        </>
    )
}