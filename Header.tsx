
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Home, Store, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-food-500">FoodieHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/restaurants" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Store size={18} />
              <span>Restaurants</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {totalItems > 0 && (
              <Badge variant="default" className="absolute -top-2 -right-2 bg-food-500 text-white">
                {totalItems}
              </Badge>
            )}
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Home size={18} />
                  <span>Home</span>
                </Link>
                <Link to="/restaurants" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Store size={18} />
                  <span>Restaurants</span>
                </Link>
                <Link to="/profile" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <User size={18} />
                  <span>Profile</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
