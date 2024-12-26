import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { featuredPosts } from '@/lib/blog';

export function generateStaticParams() {
  return featuredPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = featuredPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-medium">{post.author.name}</span>
          </div>
          <time className="text-muted-foreground">{formatDate(post.date)}</time>
        </div>
        <div className="mt-8 aspect-video overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="prose prose-lg mt-8 dark:prose-invert">
          <p>{post.excerpt}</p>
          <div className="mt-4">{post.content}</div>
        </div>
      </div>
    </article>
  );
}