
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

type FoodItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurantId: string;
  restaurantName: string;
};

export const FoodItemCard = ({
  id,
  name,
  description,
  price,
  image,
  restaurantId,
  restaurantName,
}: FoodItemProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1,
      restaurantId,
      restaurantName,
    });
    
    toast.success(`${name} added to cart`);
  };

  return (
    <div className="food-card flex md:items-center flex-col md:flex-row overflow-hidden">
      {image && (
        <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4 flex flex-col md:flex-1">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold">${price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="food-btn-primary gap-1"
          >
            <PlusCircle size={16} />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
