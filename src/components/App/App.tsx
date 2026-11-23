import { useState } from "react";
import type { FilterCategory, Product } from "@/types/product";
import { CategoryFilter } from "@/components/CategoryFilter/CategoryFilter";
import { ProductList } from "@/components/ProductList/ProductList";
import styles from "./App.module.css";

const products: Product[] = [
  { id: "p1", name: "Tacos With Lime", category: "Tacos" },
  { id: "p2", name: "Fish Tacos", category: "Tacos" },
  { id: "p4", name: "Fries and Burger", category: "Burgers" },
  { id: "p5", name: "Cheeseburger", category: "Burgers" },
  { id: "p7", name: "Veggie Burger", category: "Burgers" },
];

export function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("All");

  const visibleProducts =
    selectedCategory === "All"
      ? products
      : products.filter(({ category }) => category === selectedCategory);

  return (
    <div className={styles.app}>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProductList products={visibleProducts} />
    </div>
  );
}
