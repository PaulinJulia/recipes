export interface Recipe {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
}

export interface RecipeItemProps {
  recipe: Recipe;
  onSelected: (id: string) => void;
}
