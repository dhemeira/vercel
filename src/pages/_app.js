import '../styles/globals.css';
import MainLayout from '../components/layout/mainLayout';
import { MyThemeContextProvider } from '../store/myThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeContextProvider>
      <MainLayout>
        <Component {...pageProps} />
        <Analytics />
      </MainLayout>
    </MyThemeContextProvider>
  );
}

export default MyApp;

