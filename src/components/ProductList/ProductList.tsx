import type { Product } from "@/types/product";
import styles from "./ProductList.module.css";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <ul className={styles.list}>
      {products.map(({ id, name }) => (
        <li key={id} className={styles.item}>
          {name}
        </li>
      ))}
    </ul>
  );
}
