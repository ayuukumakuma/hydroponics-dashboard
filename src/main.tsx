import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { registerSW } from 'virtual:pwa-register'
import { ChakraProvider } from '@chakra-ui/react'
import { NavigationBar } from './components/layouts/NavigationBar'
import { theme } from './common/styles/chakraExtendTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <NavigationBar />
    </ChakraProvider>
  </React.StrictMode>,
)

registerSW()
