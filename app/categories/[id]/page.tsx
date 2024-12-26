import { notFound } from 'next/navigation';
import { ProductGrid } from '@/components/product-grid';
import { categories } from '@/lib/categories';

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{category.description}</p>
      </div>

      <ProductGrid category={category.id} />
    </div>
  );
}