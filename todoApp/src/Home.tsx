import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [count, setCount] = useState(0)
    const [searchText, setSearchText] = useState('')
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3'])

    // コンポーネント切り替えの設定
    const navigate = useNavigate()
    const handleCreateTodo = () => navigate('/create')
    const handleSearch = () => {
        // 検索ロジックをここに追加
        console.log('検索文字:', searchText)
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