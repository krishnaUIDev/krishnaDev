import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import type { ReactElement, ReactNode } from 'react';

import '@/styles/main.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session: Session;
};

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppPropsWithLayout) {
  let getLayout;

  if (router.query.simpleLayout) {
    getLayout = (page: ReactElement) => <main>{page}</main>;
  } else if (Component.getLayout) {
    getLayout = Component.getLayout;
  } else {
    getLayout = getDefaultLayout;
  }

  return (
    <SessionProvider session={session}>
      <Provider>
        <RootLayout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {getLayout(<Component {...pageProps} />)}
          <Analytics />
        </RootLayout>
      </Provider>
    </SessionProvider>
  );
}

export default App;
