import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useNetworkSync } from '@useelven/core';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../config/chakraTheme';

const SecretProject = ({ Component, pageProps }: AppProps) => {

  useNetworkSync({
    chainType: 'devnet',
    ...(process.env.NEXT_PUBLIC_WC_PROJECT_ID
      ? { walletConnectV2ProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }
      : {}),
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default SecretProject;