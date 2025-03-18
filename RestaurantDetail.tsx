
import { useParams, useNavigate } from "react-router-dom";
import { getFoodById, getRestaurantById } from "@/data/food-data";
import { FoodItemCard } from "@/components/food/FoodItemCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Timer, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  if (!id) {
    navigate("/restaurants");
    return null;
  }
  
  const restaurant = getRestaurantById(id);
  
  if (!restaurant) {
    navigate("/restaurants");
    return null;
  }

  const groupedMenu: Record<string, typeof restaurant.menu> = {};
  
  restaurant.menu.forEach((item) => {
    if (!groupedMenu[item.category]) {
      groupedMenu[item.category] = [];
    }
    groupedMenu[item.category].push(item);
  });
  
  const menuCategories = Object.keys(groupedMenu);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="h-64 sm:h-80 md:h-96 bg-gray-200 relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <Button
            variant="ghost"
            className="absolute top-4 left-4 bg-white/80 hover:bg-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        
        <div className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-3">{restaurant.name}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.categories.map((category) => (
                    <Badge key={category} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer size={16} />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck size={16} />
                    <span>Delivery: ${restaurant.deliveryFee.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-1 text-sm text-muted-foreground">
                  <MapPin size={16} className="mt-0.5" />
                  <span>{restaurant.address}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground">{restaurant.description}</p>
              </div>
              
              <div className="space-y-8">
                {menuCategories.map((category) => (
                  <div key={category}>
                    <h2 className="text-xl font-semibold mb-4">{category}</h2>
                    <div className="space-y-4">
                      {groupedMenu[category].map((item) => (
                        <FoodItemCard
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          image={item.image}
                          restaurantId={restaurant.id}
                          restaurantName={restaurant.name}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-4 sticky top-20">
                <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                </div>
                <hr className="my-4" />
                <h2 className="text-lg font-semibold mb-4">Contact</h2>
                <div className="space-y-2">
                  <p>Phone: (123) 456-7890</p>
                  <p>Email: info@{restaurant.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
