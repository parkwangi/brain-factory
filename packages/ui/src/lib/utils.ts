import { clsx, type ClassValue } from 'clsx';
import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge';

const twMerge = createTailwindMerge(() => {
  const twMergeConfig = getDefaultConfig();
  return {
    ...twMergeConfig,
    classGroups: {
      ...twMergeConfig.classGroups,
      'font-size': [
        ...twMergeConfig.classGroups['font-size'],
        // The following classes are defined in the `@repo/tailwind-config` package.
        'text-display-1',
        'text-display-2',
        'text-display-3',
        'text-display-4',
        'text-heading-1',
        'text-heading-2',
        'text-heading-3',
        'text-heading-4',
        'text-heading-5',
        'text-body-1',
        'text-body-2',
        'text-body-3',
        'text-body-4',
        'text-caption-1',
        'text-caption-2',
      ],
    },
  };
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
