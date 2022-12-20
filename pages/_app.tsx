import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
// import { theme } from '../chakra-ui-pro-theme/index';
import theme from '@theme/index';

function MyApp({ Component, pageProps }: AppProps) {
  // console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
