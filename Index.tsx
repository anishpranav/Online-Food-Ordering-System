
import { CategoryCard } from "@/components/food/CategoryCard";
import { HeroSection } from "@/components/food/HeroSection";
import { RestaurantCard } from "@/components/food/RestaurantCard";
import { categories, getRestaurants } from "@/data/food-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const restaurants = getRestaurants();
  const featuredRestaurants = restaurants.slice(0, 4);
  const displayCategories = categories.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Food Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {displayCategories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  name={category.name}
                  image={category.image}
                  slug={category.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Popular Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
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
            <div className="text-center mt-10">
              <a
                href="/restaurants"
                className="inline-block px-6 py-3 bg-food-500 hover:bg-food-600 text-white font-semibold rounded-md transition-colors"
              >
                View All Restaurants
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-food-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-food-500">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Choose a Restaurant</h3>
                  <p className="text-gray-600">Browse through our selection of restaurants and cuisines.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-food-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-food-500">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Select Your Meal</h3>
                  <p className="text-gray-600">Choose from a variety of delicious menu items and customize your order.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-food-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-food-500">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enjoy Your Food</h3>
                  <p className="text-gray-600">Place your order and get it delivered quickly to your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
