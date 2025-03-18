
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  name: string;
  image: string;
  slug: string;
  className?: string;
};

export const CategoryCard = ({ name, image, slug, className }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`} className={cn("block group", className)}>
      <div className="food-card aspect-square overflow-hidden mb-2">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <h3 className="font-medium text-center text-lg">{name}</h3>
    </Link>
  );
};
