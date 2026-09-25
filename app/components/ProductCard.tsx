import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-xl border p-4 shadow-sm">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 font-bold">
        {product.title}
      </h2>

      <p className="mt-2">
        ${product.price}
      </p>
    </article>
  );
}