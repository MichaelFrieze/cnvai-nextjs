import { Minus, Plus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FontSizeInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const FontSizeInput = ({ value, onChange }: FontSizeInputProps) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div className="flex items-center">
      <Button
        onClick={decrement}
        variant="outline"
        className="rounded-r-none border-r-0 p-2"
        size="icon"
      >
        <Minus className="size-4" />
      </Button>
      <Input
        onChange={handleChange}
        value={value}
        className="h-8 w-[50px] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button
        onClick={increment}
        variant="outline"
        className="rounded-l-none border-l-0 p-2"
        size="icon"
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
};
