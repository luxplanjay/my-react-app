export type ProductCategory = "Tacos" | "Burgers";

export type FilterCategory = "All" | ProductCategory;

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
};
