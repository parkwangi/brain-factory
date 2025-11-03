import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';
import { cn } from '@repo/ui/lib/utils';

const loadingIndicatorVariants = cva(
  'flex items-center justify-center [&_span]:rounded-full',
  {
    variants: {
      variant: {
        light: '[&_span]:bg-muted',
        dark: '[&_span]:bg-muted-foreground',
      },
      size: {
        small: 'gap-[.1875rem] [&_span]:size-1',
        medium: 'gap-1.5 [&_span]:size-2',
        large: 'gap-2.5 [&_span]:size-3',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'small',
    },
  },
);

interface LoadingIndicatorProps
  extends ComponentProps<'div'>,
    VariantProps<typeof loadingIndicatorVariants> {
  asChild?: boolean;
}

function LoadingIndicator({
  className,
  size = 'small',
  asChild = false,
  variant,
  ...props
}: LoadingIndicatorProps) {
  const dotCount = size === 'large' ? 5 : 3;
  const Comp = asChild ? SlotPrimitive.Slot : 'div';

  return (
    <Comp
      data-slot="loading-indicator"
      className={cn(loadingIndicatorVariants({ variant, size, className }))}
      {...props}
    >
      {Array.from({ length: dotCount }).map((_, index) => (
        <span
          key={`loading-indicator-${index + 1}`}
          data-slot="loading-indicator-dot"
          className={cn(
            'animate-pulse',
            [
              undefined,
              '[animation-delay:200ms]',
              '[animation-delay:400ms]',
              '[animation-delay:600ms]',
              '[animation-delay:800ms]',
            ][index],
          )}
        />
      ))}
    </Comp>
  );
}

export { LoadingIndicator };
