import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from 'store/store'

import App from './App'
import './index.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
)
