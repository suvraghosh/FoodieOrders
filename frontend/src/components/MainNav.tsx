import { Button } from "./ui/button";

const MainNav = () => {
  return(
    <Button 
        variant="ghost" 
        className="font-bold hover:bg-orange-400 border border-orange-400 bg-white hover:text-white">
        Login
    </Button>
  )
}

export default MainNav;