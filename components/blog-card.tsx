import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/blog/${post.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground">{post.author.name}</span>
          <span className="text-sm text-muted-foreground">•</span>
          <time className="text-sm text-muted-foreground">{formatDate(post.date)}</time>
        </div>
        <Link href={`/blog/${post.id}`}>
          <h3 className="mt-2 font-semibold hover:underline">{post.title}</h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
      </CardContent>
    </Card>
  );
}