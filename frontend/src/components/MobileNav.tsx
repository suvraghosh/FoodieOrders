import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-400"/>
        </SheetTrigger>

        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Welcome to CheesyWheels</span>
            </SheetTitle>

            <Separator />
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold rounded-sm h-[25px] bg-orange-400 hover:border hover:border-orange-400 hover:bg-white hover:text-black">Login</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;