import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import SearchBox from "./Content/Search/SearchBox"
import { useLocation } from "react-router-dom"

const Navbar = ({onScroll}) => {

  const searchRoute = useLocation();

  return (
    <div className={`h-[3.75rem] flex items-center justify-between px-8 sticky top-0 transition-colors z-10 ${onScroll ? 'bg-black border-opacity-10' : ''}`}>
      {console.log(onScroll)}
      <Navigation />
      {searchRoute.pathname == "/search" && (
        <SearchBox />
      )}
      <Auth />
    </div>
  )
}

export default Navbar