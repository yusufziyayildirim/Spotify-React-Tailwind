import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import Search from "./Navbar/Search"
import { useLocation } from "react-router-dom"

const Navbar = () => {

  const searchRoute = useLocation();

  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute.pathname=="/search" && (
        <Search />
      )}

      <Auth />
    </div>
  )
}

export default Navbar