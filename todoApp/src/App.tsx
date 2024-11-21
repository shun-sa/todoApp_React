import './App.css'

// react-router-domのインポート
import { Outlet } from 'react-router-dom'

// 画面コンポーネントをインポート
import Header from './Header.tsx'

import { Amplify } from 'aws-amplify'

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://3czclhy4s5hzhjdeb3gdjnwtsi.appsync-api.ap-northeast-1.amazonaws.com/graphql',
      region: 'ap-northeast-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-m5ll7romdbdxnpnisplhxc2nnq'
    }
  }
});

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
