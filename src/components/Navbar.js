import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"

const Navbar = () => {
  return (
    <div className="h-[3.75rem] flex items-center justify-between">
      <Navigation />
      <Auth />
    </div>
  )
}

export default Navbar