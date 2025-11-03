import type * as React from 'react';
import { Slot as SlotPrimitive } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@repo/ui/lib/utils';
import { LoadingIndicator } from '../custom/loading-indicator';

type ButtonVariant = 'default' | 'outline' | 'text' | 'icon';
type ButtonVariants = ReturnType<
  typeof cva<{
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
      destructive: string;
    };
    size: {
      'extra-large': string;
      large: string;
      medium: string;
      small: string;
    };
  }>
>;

const baseButtonStyle = cn(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap transition-colors hover:opacity-80',
  'focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-hidden',
  'disabled:pointer-events-none disabled:border-none disabled:text-muted-foreground',
);

function getButtonVariants(variant: ButtonVariant): ButtonVariants {
  switch (variant) {
    case 'default':
      return cva(
        cn(
          baseButtonStyle,
          'rounded-md text-heading-5',
          'disabled:bg-muted',
          'data-[state=loading]:pointer-events-none data-[state=loading]:border-none data-[state=loading]:bg-muted data-[state=loading]:text-muted-foreground',
          '[&_svg]:pointer-events-none [&_svg]:shrink-0',
        ),
        {
          variants: {
            color: {
              primary: 'bg-primary text-primary-foreground',
              secondary: 'bg-blue-50 text-primary',
              tertiary: '',
              quarternary: '',
              destructive: 'bg-error-foreground text-error',
            },
            size: {
              'extra-large': 'h-14 w-84 px-8 [&_svg]:size-4',
              large: 'h-12 w-84 px-8 [&_svg]:size-4',
              medium: 'h-10 w-40 px-3 text-body-3 [&_svg]:size-3.5',
              small: 'h-7 w-30 px-2 text-body-4 [&_svg]:size-3',
            },
          },
          defaultVariants: {
            color: 'primary',
            size: 'large',
          },
        },
      );
    case 'outline':
      return cva(
        cn(
          baseButtonStyle,
          'rounded-md border text-heading-5 text-primary hover:bg-accent disabled:bg-muted data-[state=loading]:pointer-events-none data-[state=loading]:border-none data-[state=loading]:bg-muted data-[state=loading]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0',
        ),
        {
          variants: {
            color: {
              primary: 'border-primary bg-primary-foreground text-primary',
              secondary: 'border bg-background text-grey-800',
              tertiary: '',
              quarternary: '',
              destructive:
                'border border-error-foreground text-error-foreground',
            },
            size: {
              'extra-large': 'h-14 w-84 px-8 [&_svg]:size-4',
              large: 'h-12 w-84 px-8 [&_svg]:size-4',
              medium: 'h-10 w-40 px-3 text-body-3 [&_svg]:size-3.5',
              small: 'h-7 w-30 px-2 text-body-4 [&_svg]:size-3',
            },
          },
          defaultVariants: {
            color: 'primary',
            size: 'large',
          },
        },
      );
    case 'text':
      return cva(cn(baseButtonStyle, 'h-8 gap-1.5 rounded-sm'), {
        variants: {
          color: {
            primary: 'text-primary',
            secondary: 'text-grey-800',
            tertiary: 'text-grey-600',
            quarternary: '',
            destructive: 'text-error-foreground',
          },
          size: {
            'extra-large': 'px-2 text-heading-5 [&_svg]:size-3.5',
            large: 'px-1.5 text-body-2 [&_svg]:size-3.5',
            medium: 'px-1.5 text-body-4 [&_svg]:size-3',
            small: 'px-1 text-caption-1 [&_svg]:size-3',
          },
        },
        defaultVariants: {
          size: 'large',
        },
      });
    case 'icon':
      return cva(
        cn(
          baseButtonStyle,
          'shrink-0 rounded-md text-heading-5',
          'data-[state=loading]:bg-grey-200 data-[state=loading]:text-grey-300 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        ),
        {
          variants: {
            color: {
              primary: 'bg-primary text-primary-foreground disabled:bg-muted',
              secondary: 'bg-blue-50 text-primary disabled:bg-muted',
              tertiary:
                'text-grey-800 disabled:bg-transparent data-[state=loading]:bg-transparent',
              quarternary:
                'text-grey-500 disabled:bg-transparent data-[state=loading]:bg-transparent',
              destructive: 'bg-error-foreground text-error disabled:bg-muted',
              'destructive-outline':
                'border border-error-foreground text-error disabled:bg-muted',
            },
            size: {
              'extra-large': 'size-14 [&_svg]:size-8',
              large: 'size-12 [&_svg]:size-6',
              medium: 'size-10 [&_svg]:size-6',
              small: 'size-7 [&_svg]:size-4',
            },
          },
          defaultVariants: {
            color: 'primary',
            size: 'large',
          },
        },
      );
  }
}

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color'>,
    VariantProps<ButtonVariants> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  asChild?: boolean;
}

function Button({
  className,
  variant,
  color,
  size,
  asChild = false,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? SlotPrimitive.Slot : 'button';
  const buttonVariants = getButtonVariants(variant ?? 'default');
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ color, size }), className)}
      data-state={isLoading ? 'loading' : undefined}
      {...props}
    >
      {isLoading ? (
        <LoadingIndicator
          size={
            variant === 'icon' && size !== 'extra-large' ? 'small' : 'medium'
          }
        />
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button };
