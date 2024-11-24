import { useEffect, useState } from 'react';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { ListTodoListsQuery } from './API';
import { listTodoLists } from './graphql/queries';

import SearchForm from './SearchForm';
import HomeButtonComponent from './HomeButtonComponent';
import TodoListComponent from './TodoListComponent';

function Home() {
  
  // Todoの型定義
  interface Todo {
    id: number;
    title: string;
    description: string;
    status: string;
  }
    
  // TodoリストのState管理
  const [todos, setTodos] = useState<Todo[]>([]);
    
  // APIクライアントの生成
  const client = generateClient();

  // 初回レンダリング時の処理（Todoリストの表示）
  useEffect(() => {

    // Todoリストを取得
    fetchTodoList();

  }, []);

  // Todoリスト取得処理
  function fetchTodoList() {
    // Todoリストを取得（API呼び出し）
    const result: Promise<void | GraphQLResult<ListTodoListsQuery>> = client.graphql({
      query: listTodoLists,
    });

    // Todoリストをtodosに格納
    result.then((data) => {
      if (data) {

        // Todoリストを初期化
        setTodos([]);

        // Todoリストをtodosに格納
        for (let i=0; i<(data.data?.listTodoLists?.items?.length ?? 0); i++) {
          const todoId: number = data.data?.listTodoLists?.items?.[i]?.id ?? 0;
          const todoTitle: string = data.data?.listTodoLists?.items?.[i]?.title ?? '';
          const todoDescription: string = data.data?.listTodoLists?.items?.[i]?.description ?? '';
          const todoStatus: string = data.data?.listTodoLists?.items?.[i]?.status ?? '';

          addTodo(todoId, todoTitle, todoDescription, todoStatus);
        }

      } 
      else {
        alert('Todoリストの取得に失敗しました');
      }
    });
    
  }

  // 検索処理
  const handleSearcch = (searchText: string) => {
    // 検索文字列が空の場合は全てのTodoを表示
    if (searchText === '') {
      fetchTodoList();
    }
    else {
      // 検索文字列に一致するTodoを表示
      const filteredTodos = todos.filter((todo) => {
        return todo.title.includes(searchText) || todo.description.includes(searchText);
      });
      setTodos(filteredTodos);
    }
  };

  // Todo追加処理
  const addTodo = (todoId: number, todoTitle: string, todoDescription: string, todoStatus: string) => {
    const newTodo: Todo = {
      id: todoId,
      title: todoTitle,
      description: todoDescription,
      status: todoStatus,
    };

    // prevTodosがnullの場合は新しい配列として初期化
    setTodos((prevTodos) => (prevTodos ? [...prevTodos, newTodo] : [newTodo]));
  };

  return (
    <>
      
      <SearchForm onSearch={handleSearcch} />

      <HomeButtonComponent />

      <TodoListComponent todos={todos} />

    </>
  )
}
  
  export default Home;