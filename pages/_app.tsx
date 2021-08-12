import { ChakraProvider, ColorModeScript, useColorMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import theme from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {

  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    /**
     * force light mode just because
     * the graph isn't styled for darkmode
     */
    if (colorMode === 'dark') {
      toggleColorMode()
    }
    localStorage.removeItem('chakra-ui-color-mode')
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
