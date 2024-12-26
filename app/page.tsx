import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCard } from '@/components/product-card';
import { BlogCard } from '@/components/blog-card';
import { featuredProducts } from '@/lib/products';
import { featuredPosts } from '@/lib/blog';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative py-24 text-center text-white sm:py-32">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Discover the Power of Ayurvedic Healing
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg">
            Ancient wisdom meets modern wellness. Explore our curated collection of authentic Ayurvedic products and learn about natural healing practices.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {['Herbs & Supplements', 'Essential Oils', 'Herbal Teas', 'Natural Skincare'].map((category) => (
            <Card key={category} className="group relative overflow-hidden">
              <div className="aspect-square">
                <img
                  src={`https://source.unsplash.com/featured/?${category.toLowerCase()}`}
                  alt={category}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">Read More Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}