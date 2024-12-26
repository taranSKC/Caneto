'use client';

import Link from 'next/link';
import { Menu, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

interface Route {
  name: string;
  path: string;
}

interface MobileNavProps {
  routes: Route[];
  pathname: string;
}

export function MobileNav({ routes, pathname }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <SheetTitle className="px-7">Menu</SheetTitle>
        <div className="px-7">
          <Link href="/" className="flex items-center">
            <Leaf className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">Caneato</span>
          </Link>
          <nav className="mt-8 flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-lg ${pathname === route.path ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}