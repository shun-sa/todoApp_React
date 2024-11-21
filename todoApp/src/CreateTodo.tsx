import { createTodoList } from './graphql/mutations'
import { generateClient } from 'aws-amplify/api'

function CreateTodo() {

    const client = generateClient();

    async function createTodo() {

      // 新規Todoを作成
      const result = await client.graphql({
        query: createTodoList,
        variables: {
          input: {
            id: 1,
            title: 'New Todo',
            description: 'This is a new todo',
            status: '進行中',
          },
        },
      });

      // 結果をコンソールに出力
      console.log(result);
    }
  
    return (
      <>
        <button onClick={createTodo}>
          Todo登録
        </button>
  
      </>
    )
  }
  
  export default CreateTodo