import { useEffect, useState } from 'react';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { DeleteTodoListMutation, ListTodoListsQuery } from './API';
import { listTodoLists } from './graphql/queries';

/*
   課題1
    新規Todo登録ボタン、削除ボタン用のコンポーネントをインポートする。  
*/

/* 
   課題2
    検索フォーム用のコンポーネントをインポートする。
*/

import TodoListComponent from './TodoListComponent';
import { deleteTodoList } from './graphql/mutations';

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
  const searchTodoList = (searchText: string) => {
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

  const handleDeleteTodo = (idToDelete : number) => {

    // Todoリストから削除対象のTodoを除外
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));

    // Todo削除処理(API呼び出し)
    const result: Promise<GraphQLResult<DeleteTodoListMutation>> = client.graphql({
      query: deleteTodoList,
      variables: {
        input: {
          id: idToDelete,
        },
      },
    });

    result.then((data) => {
      if (data) {
        alert('Todoを削除しました。');
      }
      else {
        alert('Todoの削除に失敗しました。');
      }
    });
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

  // ステータス更新処理
  const handleStatusChange = (id: number, newStatus: string) => {
    // 現在のtodosを変更せず、新しい状態を反映
      setTodos((prevTodos) => {
        return prevTodos.map((todo) =>
          todo.id === id ? { ...todo, status: newStatus } : todo
        );
      });
  };

  return (
    <>
      
      {/* 
        課題2
        検索フォームを追加する。 
      */}

      {/* 
        課題1
        新規Todo登録ボタン、Todo削除ボタンを追加する。
       */}

      <TodoListComponent todos={todos} onStatusChange={handleStatusChange} />

    </>
  )
}
  
  export default Home;