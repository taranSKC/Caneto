"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantityAdjusterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityAdjuster({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityAdjusterProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrease}
        className="h-8 w-8"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrease}
        className="h-8 w-8"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
