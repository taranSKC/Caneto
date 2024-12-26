'use client';

import Link from 'next/link';

interface Route {
  name: string;
  path: string;
}

interface MainNavProps {
  routes: Route[];
  pathname: string;
}

export function MainNav({ routes, pathname }: MainNavProps) {
  return (
    <nav className="hidden flex-1 gap-6 lg:flex">
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={`text-sm ${pathname === route.path ? 'text-primary font-medium' : 'text-muted-foreground'}`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}