import { notFound } from "next/navigation";
import { featuredProducts } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";

export function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = featuredProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-xl font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          <AddToCartButton product={product} size="lg" className="mt-8" />
        </div>
      </div>
    </div>
  );
}
