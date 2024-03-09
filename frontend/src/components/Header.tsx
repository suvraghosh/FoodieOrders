import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="py-6 bg-[#333] text-white">
        <div className="container flex items-center justify-between mx-auto">
            <Link 
                to="/" 
                className="text-3xl font-bold tracking-tight text-orange-400">
                Cheesy<span className="text-white">Wheels</span>
            </Link>

            <div className="md:hidden">
              <MobileNav />
            </div>

            <div className="hidden md:block">
              <MainNav />
            </div>
        </div>
    </div>
  )
}

export default Header;