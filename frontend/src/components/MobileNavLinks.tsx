import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        Order Status
      </Link>

      <Link
        to="/manage-restaurant"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        My Restaurant
      </Link>

      <Link
        to="/user-profile"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        User Profile
      </Link>

      <Button
        onClick={() => logout()}
        className="flex-1 flex items-center font-bold rounded-sm h-[25px] bg-orange-400 hover:border hover:border-orange-400 hover:bg-white hover:text-black"
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
