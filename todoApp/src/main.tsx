import { StrictMode } from 'react'
import './index.css'

// react-router-domのインポート
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// 画面コンポーネントをインポート
import { AppRoutes }  from './Route.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </StrictMode>,
)
