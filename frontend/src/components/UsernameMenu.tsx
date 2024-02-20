import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-none px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>

      <DropdownMenuContent  className="p-4 bg-white rounded shadow">
        <DropdownMenuItem className="outline-none">
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>

        <Separator className="my-4"/>

        <DropdownMenuItem className="outline-none">
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-400 hover:border hover:border-orange-400 hover:bg-white hover:text-black"
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
