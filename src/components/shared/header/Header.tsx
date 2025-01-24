import { Button } from "@/components/ui/button";
import { ShoppingCart, User, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
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
          <div className="space-x-2">
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
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
