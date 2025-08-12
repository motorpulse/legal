import type { FC } from 'react';

import privacyPolicyUpdatedAt from '@app/(legal)/privacy-policy/updated-at.ts';

// eslint-disable-next-line jsdoc/require-jsdoc
export const LastUpdatedAt: FC<unknown> = () => {
  return (
    <blockquote>
      <p>Last updated at: {privacyPolicyUpdatedAt().toDateString()}</p>
    </blockquote>
  );
};
