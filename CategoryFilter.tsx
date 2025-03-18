
import { useState } from "react";
import { Button } from "@/components/ui/button";

type CategoryFilterProps = {
  categories: string[];
  onSelectCategory: (category: string | null) => void;
};

export const CategoryFilter = ({ categories, onSelectCategory }: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      onSelectCategory(null);
    } else {
      setSelectedCategory(category);
      onSelectCategory(category);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap mb-6">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        className={selectedCategory === null ? "bg-food-500 hover:bg-food-600" : ""}
        onClick={() => {
          setSelectedCategory(null);
          onSelectCategory(null);
        }}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={selectedCategory === category ? "bg-food-500 hover:bg-food-600" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
