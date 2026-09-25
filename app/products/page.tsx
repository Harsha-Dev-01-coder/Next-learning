import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "MacBook Air",
    price: 1299,
    image: "/macbook.jpg",
  },
  {
    id: 2,
    title: "iPhone",
    price: 999,
    image: "/iphone.jpg",
  },
  {
    id: 3,
    title: "AirPods",
    price: 249,
    image: "/airpods.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Products
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}