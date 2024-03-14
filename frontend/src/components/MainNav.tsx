import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-600">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="relative z-10 px-8 py-2 overflow-hidden text-orange-700 bg-white border-2 border-orange-500 rounded-md rounded-full hover:text-white isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
          onClick={async () => loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </span>
  );
};

export default MainNav;
