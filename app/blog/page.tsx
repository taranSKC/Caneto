'use client';

import { BlogCard } from '@/components/blog-card'; // Ensure the path is correct
import { featuredPosts } from '@/lib/blog'; // Ensure the path is correct

export default function BlogPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          // Ensure 'post.id' exists in the data
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
