import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './styles/main.less'
import App from './containers/App'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HashRouter basename='/'>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </HashRouter>
      </QueryClientProvider>
    </React.StrictMode>,
  document.querySelector('#app')
)
