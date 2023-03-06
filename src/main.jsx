import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>

    <App />
    <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,

)
