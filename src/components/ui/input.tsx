import * as React from 'react';
import { Input } from '@material-tailwind/react';
import { cn } from '@/lib/utils';
import './input.css';

interface InputProps {
  className?: string;
  type?: unknown;
  ref?: React.ForwardedRef<HTMLInputElement>;
  key?: string | number;
  name?: string;
  value?: unknown;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Changed
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}


const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        type={type}
        className={cn(
          `flex w-full border bg-rake_background-500 px-3 py-2 text-sm text-[#f5f5f5]
          outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-slate-500 focus-visible:outline-none
          disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
InputComponent.displayName = 'Input';

export { InputComponent };
