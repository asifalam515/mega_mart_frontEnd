import { Button } from "@/components/ui/button";
import { Link, ShoppingCart, User } from "lucide-react";
import ToggleMode from "./ToggleMode";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
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
    </div>
  );
};

export default Menu;
