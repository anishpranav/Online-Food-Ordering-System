
export type CartItemType = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
};

export type RestaurantType = {
  id: string;
  name: string;
  image: string;
  categories: string[];
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  address: string;
  description: string;
  menu: FoodItemType[];
};

export type FoodItemType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type CategoryType = {
  name: string;
  slug: string;
  image: string;
};
