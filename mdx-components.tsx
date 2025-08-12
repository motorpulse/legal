import type { MDXComponents } from 'mdx/types';

import { Heading } from '@/components/ui/kit';

// eslint-disable-next-line jsdoc/require-jsdoc
function createHeadingComponent<Level extends 1 | 2 | 3 | 4 | 5>(level: Level) {
  return {
    // eslint-disable-next-line jsdoc/require-jsdoc
    [`h${level}`]: ({ children }) => (
      <Heading level={level}>{children}</Heading>
    ),
  } satisfies Record<string, MDXComponents[`h${Level}`]>;
}

/**
 * Allows to make custom components for parsed MDX.
 * @param components
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...createHeadingComponent(1),
    ...createHeadingComponent(2),
    ...createHeadingComponent(3),
    ...createHeadingComponent(4),
    ...createHeadingComponent(5),
  };
}
