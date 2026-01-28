import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';

// Custom Input with floating label
interface LabelDateProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
  className?: string;
}

const LabelDate = React.forwardRef<HTMLInputElement, LabelDateProps>(
  ({ label, error, value, onValueChange, className, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value) : undefined);

    return (
      <div className="relative w-full">
        <label className="pointer-events-none absolute top-0 left-3 -translate-y-1/2 bg-[#303030] px-[6px] text-sm">
          {label}
        </label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker-optional"
              className={cn(
                'h-14 w-full justify-between rounded-[4px] border-[#9B9B9B]! bg-[#303030]! font-normal',
                { 'text-muted-foreground': !date },
                { 'border-destructive!': error },
                className,
              )}
            >
              {date ? format(date, 'PPP') : 'mm/dd/yyyy'}
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                setDate(date);
                onValueChange(date ? date.toISOString() : '');
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

LabelDate.displayName = 'LabelDate';

export default LabelDate;
