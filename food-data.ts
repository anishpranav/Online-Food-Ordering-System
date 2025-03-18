
import { CategoryType, FoodItemType, RestaurantType } from "@/types/food";

// Categories
export const categories: CategoryType[] = [
  {
    name: "Pizza",
    slug: "pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Burgers",
    slug: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sushi",
    slug: "sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Pasta",
    slug: "pasta",
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Desserts",
    slug: "desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Healthy",
    slug: "healthy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// Restaurants with menus
export const restaurants: RestaurantType[] = [
  {
    id: "r1",
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    categories: ["Pizza", "Italian", "Fast Food"],
    rating: 4.7,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    address: "123 Main St, Foodville",
    description: "Authentic Italian pizzas made with fresh ingredients and baked in a wood-fired oven.",
    menu: [
      {
        id: "r1-f1",
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Pizza",
      },
      {
        id: "r1-f2",
        name: "Pepperoni Pizza",
        description: "Tomato sauce, mozzarella, and pepperoni",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Pizza",
      },
      {
        id: "r1-f3",
        name: "Vegetarian Pizza",
        description: "Tomato sauce, mozzarella, bell peppers, onions, mushrooms, and olives",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Pizza",
      },
      {
        id: "r1-f4",
        name: "Garlic Bread",
        description: "Freshly baked bread with garlic butter and herbs",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1619531038896-14930062c9b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sides",
      },
    ],
  },
  {
    id: "r2",
    name: "Burger Haven",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    categories: ["Burgers", "American", "Fast Food"],
    rating: 4.5,
    deliveryTime: "15-25 min",
    deliveryFee: 1.99,
    address: "456 Burger Ave, Foodville",
    description: "Juicy, flame-grilled burgers made with 100% premium beef and fresh toppings.",
    menu: [
      {
        id: "r2-f1",
        name: "Classic Cheeseburger",
        description: "Beef patty, cheese, lettuce, tomato, onion, and special sauce",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Burgers",
      },
      {
        id: "r2-f2",
        name: "Bacon Burger",
        description: "Beef patty, crispy bacon, cheese, lettuce, tomato, and mayo",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Burgers",
      },
      {
        id: "r2-f3",
        name: "Veggie Burger",
        description: "Plant-based patty, cheese, lettuce, tomato, onion, and special sauce",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Burgers",
      },
      {
        id: "r2-f4",
        name: "French Fries",
        description: "Crispy golden fries with sea salt",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sides",
      },
    ],
  },
  {
    id: "r3",
    name: "Sushi Sensation",
    image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    categories: ["Sushi", "Japanese", "Asian"],
    rating: 4.8,
    deliveryTime: "30-45 min",
    deliveryFee: 4.99,
    address: "789 Sushi Lane, Foodville",
    description: "Fresh and authentic Japanese sushi crafted by master chefs using premium ingredients.",
    menu: [
      {
        id: "r3-f1",
        name: "California Roll",
        description: "Crab, avocado, cucumber, and tobiko",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1556713304-e5ac0f02e516?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sushi",
      },
      {
        id: "r3-f2",
        name: "Spicy Tuna Roll",
        description: "Spicy tuna, cucumber, and spicy mayo",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1620207346061-bb62c8e47858?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sushi",
      },
      {
        id: "r3-f3",
        name: "Salmon Nigiri",
        description: "Fresh salmon over seasoned rice",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sushi",
      },
      {
        id: "r3-f4",
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu and seaweed",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1610725657853-2ed9271548c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sides",
      },
    ],
  },
  {
    id: "r4",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    categories: ["Mexican", "Tacos", "Fast Food"],
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 2.49,
    address: "101 Taco Street, Foodville",
    description: "Authentic Mexican street tacos and burritos made with traditional recipes.",
    menu: [
      {
        id: "r4-f1",
        name: "Beef Tacos",
        description: "Seasoned ground beef, lettuce, cheese, and salsa in corn tortillas",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Tacos",
      },
      {
        id: "r4-f2",
        name: "Chicken Quesadilla",
        description: "Grilled chicken, melted cheese, and peppers in a flour tortilla",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7955e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Quesadillas",
      },
      {
        id: "r4-f3",
        name: "Beef Burrito",
        description: "Seasoned beef, rice, beans, cheese, and salsa wrapped in a flour tortilla",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Burritos",
      },
      {
        id: "r4-f4",
        name: "Nachos",
        description: "Tortilla chips topped with cheese, jalapeños, salsa, and sour cream",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Sides",
      },
    ],
  },
];

// Helper functions to fetch data
export const getRestaurants = () => restaurants;
export const getCategories = () => categories;

export const getRestaurantById = (id: string) => {
  return restaurants.find((restaurant) => restaurant.id === id);
};

export const getRestaurantsByCategory = (categorySlug: string) => {
  const matchingRestaurants = restaurants.filter((restaurant) => {
    return restaurant.categories.some(
      (category) => category.toLowerCase() === categorySlug.toLowerCase()
    );
  });
  return matchingRestaurants;
};

export const getFoodById = (restaurantId: string, foodId: string) => {
  const restaurant = getRestaurantById(restaurantId);
  if (!restaurant) return null;
  
  return restaurant.menu.find((item) => item.id === foodId);
};

export const getRestaurantsBySearch = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  
  return restaurants.filter((restaurant) => {
    // Check restaurant name
    if (restaurant.name.toLowerCase().includes(lowercaseQuery)) return true;
    
    // Check categories
    if (restaurant.categories.some((category) => 
      category.toLowerCase().includes(lowercaseQuery)
    )) return true;
    
    // Check menu items
    if (restaurant.menu.some((item) => 
      item.name.toLowerCase().includes(lowercaseQuery) || 
      item.description.toLowerCase().includes(lowercaseQuery)
    )) return true;
    
    return false;
  });
};
