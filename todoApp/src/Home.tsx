import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { listTodoLists } from './graphql/queries'
import { generateClient, GraphQLResult } from 'aws-amplify/api'
import { ListTodoListsQuery } from './API'

function Home() {
    const [searchText, setSearchText] = useState('')
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3'])

    const client = generateClient();

    // コンポーネント切り替えの設定
    const navigate = useNavigate()
    const handleCreateTodo = () => navigate('/create')

    const handleSearch = () => {
        // 検索ロジックをここに追加
        console.log('検索文字:', searchText)

        // Todoリストを取得
        const result: Promise<void | GraphQLResult<ListTodoListsQuery>> = client.graphql({
            query: listTodoLists,
        });

        // 結果をコンソールに出力
        result.then((data) => {
            if (data) {
                console.log(data.data?.listTodoLists?.items);
            } else {
                console.error('No data returned from the query');
            }
        });
    }
  
    return (
      <>
        
        <button onClick={handleCreateTodo}>
        新規Todo作成
        </button>

        <div>
          <input 
            type="text" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder="検索文字を入力" 
          />
          <button onClick={handleSearch}>検索</button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
  
      </>
    )
  }
  
  export default Home