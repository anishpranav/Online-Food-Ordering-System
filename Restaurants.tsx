import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { CategoryFilter } from "@/components/food/CategoryFilter";
import { RestaurantCard } from "@/components/food/RestaurantCard";
import { getCategories, getRestaurants, getRestaurantsByCategory, getRestaurantsBySearch } from "@/data/food-data";
import { RestaurantType } from "@/types/food";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search } from "lucide-react";

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchQuery = searchParams.get("search") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  
  const allRestaurants = getRestaurants();
  const categories = allRestaurants
    .flatMap((restaurant) => restaurant.categories)
    .filter((value, index, self) => self.indexOf(value) === index);

  useEffect(() => {
    // Handle initial search query from URL
    if (initialSearchQuery) {
      const searchResults = getRestaurantsBySearch(initialSearchQuery);
      setRestaurants(searchResults);
      return;
    }
    
    // Otherwise show all restaurants
    setRestaurants(allRestaurants);
  }, [initialSearchQuery]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchResults = getRestaurantsBySearch(searchQuery);
      setRestaurants(searchResults);
      
      // Update URL search params
      setSearchParams({ search: searchQuery });
    } else {
      setRestaurants(allRestaurants);
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    
    if (category) {
      const filteredRestaurants = allRestaurants.filter((restaurant) =>
        restaurant.categories.includes(category)
      );
      setRestaurants(filteredRestaurants);
    } else {
      // If search query exists, filter by that, otherwise show all
      if (searchQuery.trim()) {
        const searchResults = getRestaurantsBySearch(searchQuery);
        setRestaurants(searchResults);
      } else {
        setRestaurants(allRestaurants);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Restaurants</h1>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for restaurants or cuisines..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          
          <CategoryFilter 
            categories={categories} 
            onSelectCategory={handleCategoryFilter} 
          />
          
          {restaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  image={restaurant.image}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                  categories={restaurant.categories}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No restaurants found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;
