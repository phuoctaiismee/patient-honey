import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import React from 'react';

interface LabelTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const LabelTextarea = React.forwardRef<HTMLTextAreaElement, LabelTextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <label className="pointer-events-none absolute top-0 left-3 -translate-y-1/2 bg-[#303030] px-[6px] text-sm">
          {label}
        </label>
        <Textarea
          ref={ref}
          className={cn(
            'min-h-[100px] rounded-[4px] border-[#9B9B9B] bg-[#303030]! pt-4',
            error && 'border-red-500',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

LabelTextarea.displayName = 'LabelTextarea';
export default LabelTextarea;
