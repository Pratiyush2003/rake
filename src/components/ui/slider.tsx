import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className='relative h-2 w-full grow overflow-hidden rounded-full bg-rake_green-500
        dark:bg-slate-800'
    >
      <SliderPrimitive.Range className='absolute h-full bg-rake_red-700 outline-none dark:bg-slate-50' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className='relative block h-5 w-5 rounded-full border-2 border-solid border-blue-500
        bg-white outline-none cursor-grab'
    >
      <span className='absolute text-center text-xs text-rake_red-500'>50</span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
