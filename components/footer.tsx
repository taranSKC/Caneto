import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background p-3">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="font-bold">Ayurveda</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ancient wisdom for modern wellness. Discover natural healing through authentic Ayurvedic practices and products.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop/herbs" className="text-muted-foreground hover:text-primary">Herbs & Supplements</Link></li>
              <li><Link href="/shop/oils" className="text-muted-foreground hover:text-primary">Essential Oils</Link></li>
              <li><Link href="/shop/teas" className="text-muted-foreground hover:text-primary">Herbal Teas</Link></li>
              <li><Link href="/shop/skincare" className="text-muted-foreground hover:text-primary">Natural Skincare</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-muted-foreground hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ayurveda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}