
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 py-12 md:py-24">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="text-food-500">Delicious Food</span> Delivered To Your Door
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700">
            Order from your favorite local restaurants with just a few taps.
          </p>
          
          <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for food or restaurants..."
                className="pl-10 pr-4 py-6 text-lg border-r-0 rounded-r-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="rounded-l-none food-btn-primary text-lg py-6 px-8">
              Search
            </Button>
          </form>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-food-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-food-200 rounded-full opacity-30 transform -translate-x-12 translate-y-12"></div>
    </div>
  );
};
