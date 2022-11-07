import '../styles/globals.css';
import MainLayout from '../components/layout/mainLayout';
import { MyThemeContextProvider } from '../store/myThemeContext';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <MyThemeContextProvider>
        <MainLayout>
          <Component {...pageProps} />
          <Analytics />
        </MainLayout>
      </MyThemeContextProvider>
    </SessionProvider>
  );
}

export default MyApp;

