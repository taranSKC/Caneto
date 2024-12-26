import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card className="group relative overflow-hidden">
        <div className="aspect-square">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        </div>
      </Card>
    </Link>
  );
}