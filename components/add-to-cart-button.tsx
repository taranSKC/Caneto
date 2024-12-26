'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  productName: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function AddToCartButton({ productName, className, size = 'default' }: AddToCartButtonProps) {
  const { toast } = useToast();

  const addToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <Button onClick={addToCart} size={size} className={className}>
      Add to Cart
    </Button>
  );
}