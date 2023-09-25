import ProductDetails from "@/components/productDetails";

const getProduct = async ({ params }: { params: { id: string } }) => {
  const product = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await product.json();
  return data;
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct({ params });
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
