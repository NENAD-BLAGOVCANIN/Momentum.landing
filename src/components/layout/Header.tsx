import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Icon from "../../assets/icon.png";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  return (
    <header className="py-4 border">
      <div className="container flex justify-between items-center">
        <a href="/" className="flex items-center text-xl font-bold">
          <img src={Icon} alt="MyLogo" className="h-14 w-14 me-15" />
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <a href="/" className="px-4">
              Home
            </a>
            <a href="#features" className="px-4">
              Features
            </a>
            <a href="/help" className="px-4">
              Help
            </a>
            <a href="/privacy-policy" className="px-4">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="px-4">
              Terms of Service
            </a>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center">
            <div className="pe-2">
            <ModeToggle />
            </div>
          <Button variant="default">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
