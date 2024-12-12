import { cva } from 'class-variance-authority';

export const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 hover:text-slate-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-400 dark:focus-visible:ring-slate-300 dark:data-[state=on]:bg-slate-800 dark:data-[state=on]:text-slate-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-inter font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-rake_blue-500 text-white hover:bg-rake_blue-500/90 border-none',
        red: 'bg-rake_red-500 text-white hover:bg-rake_red-500/90 border-none',
        green:
          'bg-rake_green-500 text-white hover:bg-rake_green-500/90 border-none',
        text: 'text-inherit hover:text-rake_blue-500 bg-transparent border-none',
        link: 'text-rake_blue-500 underline-offset-4 hover:underline bg-transparent border-none',
        outlined:
          'text-rake_blue-500 border-2 border-rake_blue-500 bg-transparent hover:border-rake_blue-500/80 hover:text-rake_blue-500/80',
        ghost:
          'bg-rake_background-600 text-rake_background-300 hover:bg-rake_background-600/90 border-none',
      },
      size: {
        default: 'h-[2.875rem] px-8 rounded-xl font-bold uppercase',
        sm: 'h-7 rounded-xl font-bold uppercase px-3',
        md: 'h-8 rounded-xl font-bold uppercase px-5',
        lg: 'h-[2.875rem] rounded-xl font-bold uppercase px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
