import { useAuth0 } from "@auth0/auth0-react";
import { ChevronDown, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-3 font-bold outline-none hover:text-orange-500">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
        <ChevronDown className="pr-2"/>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-20 p-4 bg-white rounded shadow">
        {/* User Profile Link */}
        <DropdownMenuItem className="m-1 outline-none">
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>

        {/* Manage Restaurant Link */}
        <DropdownMenuItem className="m-1 outline-none">
          <Link
            to="/manage-restaurant"
            className="font-bold hover:text-orange-500"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem className="flex items-center m-1 outline-none">
          <Button
            onClick={() => logout()}
            className="flex flex-1 mt-2 font-bold bg-orange-400 hover:border hover:border-orange-400 hover:bg-white hover:text-black"
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
