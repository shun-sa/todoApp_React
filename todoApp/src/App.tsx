import './App.css'

// react-router-domのインポート
import { Outlet } from 'react-router-dom'

// 画面コンポーネントをインポート
import Header from './Header.tsx'

function App() {

  return (
    <>

      {/* Headerコンポーネントを呼び出す */}
      <Header />

      {/* メインコンポーネントを呼び出す */}
      <Outlet />
      
    </>
  )
}

export default App
