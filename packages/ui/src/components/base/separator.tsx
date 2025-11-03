'use client';

import type * as React from 'react';
import { Separator as SeparatorPrimitive } from 'radix-ui';
import { cn } from '@repo/ui/lib/utils';

interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  size?: 'default' | 'bold';
}

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  size = 'default',
  ...props
}: SeparatorProps) {
  const isBold = size === 'bold';
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-grey-300',
        orientation === 'horizontal'
          ? `${isBold ? 'h-2' : 'h-px'} w-full`
          : `${isBold ? 'w-2' : 'w-px'} h-full`,
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
