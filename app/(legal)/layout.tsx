import cn from 'classnames';
import type { FC, PropsWithChildren } from 'react';

import { Container } from '@/components/ui';

import styles from './legal-pages.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
const LegalLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(styles.legal)}>
      <Container
        maxSize='1400px'
        asChild
        className={cn('py-[2rem]', styles.inner)}
      >
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default LegalLayout;
