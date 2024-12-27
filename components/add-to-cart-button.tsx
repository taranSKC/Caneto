'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/cart-context';
import { Product } from '@/lib/types';
import { QuantityAdjuster } from '@/components/quantity-adjuster';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function AddToCartButton({ product, className, size = 'default' }: AddToCartButtonProps) {
  const { toast } = useToast();
  const { items, addItem, updateQuantity } = useCart();
  
  const cartItem = items.find(item => item.id === product.id);

  if (cartItem) {
    return (
      <QuantityAdjuster
        quantity={cartItem.quantity}
        onIncrease={() => updateQuantity(product.id, cartItem.quantity + 1)}
        onDecrease={() => updateQuantity(product.id, cartItem.quantity - 1)}
      />
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Button onClick={handleAddToCart} size={size} className={className}>
      Add to Cart
    </Button>
  );
}