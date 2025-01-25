import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart, User, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Header = () => {
  return (
    <div>
      <header className="w-full border-b">
        <div className="wrapper flex-between">
          <div className="flex-start">
            <Link href="/" className="flex-start">
              <Image
                src="logo.svg"
                alt="header photo"
                height={48}
                width={48}
                priority={true}
              ></Image>
              <span className="hidden lg:block font-bold text-2xl ml-3">
                MegaMart
              </span>
            </Link>
          </div>

          <div className="space-x-5">
            <nav className="hidden md:flex space-x-5">
              {/* nav part 1 */}
              <ToggleMode></ToggleMode>
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart></ShoppingCart>
                  Cart
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in">
                  <User></User>
                  Sign In
                </Link>
              </Button>
            </nav>
            {/* nav part 2 */}
            <nav className="lg:hidden md:hidden">
              <Sheet>
                <SheetTrigger className="align-middle">
                  <EllipsisVertical></EllipsisVertical>
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <ToggleMode></ToggleMode>
                    <Button asChild variant="ghost">
                      <Link href="/cart">
                        <ShoppingCart></ShoppingCart>Cart
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/sign-in">
                        <User></User>
                        Sign In
                      </Link>
                    </Button>
                  </SheetDescription>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
