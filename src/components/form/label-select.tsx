'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import React from 'react';

interface LabelSelectProps {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const LabelSelect = React.forwardRef<HTMLButtonElement, LabelSelectProps>(
  ({ label, error, options, placeholder = 'Select an option', value, onValueChange, className, disabled }, ref) => {
    return (
      <div className="relative w-full">
        <label className="pointer-events-none absolute top-0 left-3 z-10 -translate-y-1/2 bg-[#303030] px-[6px] text-sm">
          {label}
        </label>
        <Select value={value} onValueChange={onValueChange} disabled={disabled}>
          <SelectTrigger
            ref={ref}
            className={cn(
              'h-14! w-full rounded-[4px] border-[#9B9B9B] bg-[#303030]!',
              error && 'border-destructive',
              className,
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent position="popper">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

LabelSelect.displayName = 'LabelSelect';
export default LabelSelect;
