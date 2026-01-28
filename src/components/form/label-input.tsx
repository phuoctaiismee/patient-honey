import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

// Custom Input with floating label
interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const LabelInput = React.forwardRef<HTMLInputElement, LabelInputProps>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <label className="pointer-events-none absolute top-0 left-3 -translate-y-1/2 bg-[#303030] px-[6px] text-sm">
        {label}
      </label>
      <Input
        ref={ref}
        className={cn(
          'h-14 rounded-[4px] border-[#9B9B9B] bg-[#303030]!',
          {
            'border-destructive focus-visible:border-destructive focus-visible:ring-destructive': error,
          },
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
});

LabelInput.displayName = 'LabelInput';

export default LabelInput;
