'use client';

import { useCart } from '@/contexts/cart-context';
import { QuantityAdjuster } from '@/components/quantity-adjuster';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-muted-foreground">
          Add some items to your cart to get started.
        </p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-2xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="mb-4 flex items-center gap-4 rounded-lg border p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <QuantityAdjuster
                quantity={item.quantity}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="mb-4 flex justify-between border-b pb-4">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}