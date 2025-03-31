import './App.css'

// react-router-domのインポート
import { Outlet } from 'react-router-dom'

// 画面コンポーネントをインポート
import Header from './Header.tsx'

import { Amplify } from 'aws-amplify'

// Amplifyの設定（任意課題のクライアント変更部分）
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://3czclhy4s5hzhjdeb3gdjnwtsi.appsync-api.ap-northeast-1.amazonaws.com/graphql',
      region: 'ap-northeast-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-ergzmresqnc73hydayujy3ngsq'
    }
  }
});

function App() {

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>

      {/* Headerコンポーネントを呼び出す */}
      <Header />

      {/* メインコンポーネントを呼び出す */}
      <div style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
        <Outlet />
      </div>
      
    </div>
  )
}

export default App
