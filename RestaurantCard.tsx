
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type RestaurantCardProps = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  categories: string[];
};

export const RestaurantCard = ({
  id,
  name,
  image,
  rating,
  deliveryTime,
  categories,
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`} className="block group">
      <div className="food-card overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg truncate">{name}</h3>
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{rating}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="bg-muted/50">
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            {deliveryTime} delivery time
          </p>
        </div>
      </div>
    </Link>
  );
};
