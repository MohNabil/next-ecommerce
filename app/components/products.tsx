import Link from "next/link";
import { Product } from "@/components/product";
import ProductItem from "@/components/product";

type ProductsProps = {
  products: Product[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="py-24">
      <div className="container flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6">Products</h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <ProductItem product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
