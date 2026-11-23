import type { FilterCategory } from "@/types/product";
import styles from "./CategoryFilter.module.css";

type CategoryFilterProps = {
  selectedCategory: FilterCategory;
  onSelect: (category: FilterCategory) => void;
};

const categories: FilterCategory[] = ["All", "Tacos", "Burgers"];

export function CategoryFilter({
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={styles.button}
          disabled={category === selectedCategory}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
