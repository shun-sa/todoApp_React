import { MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { updateTodoList } from './graphql/mutations';
import { UpdateTodoListMutation } from './API';

// Todoの型定義
interface Todo {
    id: number;
    title: string;
    description: string;
    status: string;
}

// TodoリストのProps定義
interface TodoListComponentProps {
    todos: Todo[];
    onStatusChange: (id: number, newStatus: string) => void;
}

const TodoListComponent: React.FC<TodoListComponentProps> = ({ todos, onStatusChange }) => {

  // APIクライアントの生成
  const client = generateClient();

  // IDの順番に並べ替え
  const sortedTodos = [...todos].sort((a, b) => a.id - b.id);

  // ステータス更新処理
  async function handleStatusChange (id: number, newStatus: string) {

    try {
      // ステータスを更新（API呼び出し）
      const result: GraphQLResult<UpdateTodoListMutation> = await client.graphql({
        query: updateTodoList,
        variables: {
          input: {
            id: id,
            status: newStatus,
          },
        },
      });

      if (result.data) {
        alert(`ID ${id} のステータスを ${newStatus} に更新しました。`);
        onStatusChange(id, newStatus);
      } else {
        alert(`ID ${id} のステータス更新に失敗しました。`);
      }
    } catch (error) {
      alert(`ID ${id} のステータス更新に失敗しました。`);
    }

  };

    return (
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: '0 auto', borderRadius: 4 }}>
        
        <Table>

          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>タイトル</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>詳細</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>ステータス</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedTodos.map((todo) => (
              <TableRow key={todo.id} sx={{ '&:hover': { backgroundColor: '#f0f8ff' } }}>
                <TableCell align="center">{todo.id}</TableCell>
                <TableCell align="center">{todo.title}</TableCell>
                <TableCell align="center">{todo.description}</TableCell>
                <TableCell align="center">
                  <Select
                    value={todo.status}
                    onChange={(e) => handleStatusChange(todo.id, e.target.value)}
                    sx={{
                      color:
                        todo.status === '完了'
                          ? 'green'
                          : todo.status === '進行中'
                          ? 'orange'
                          : 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    <MenuItem value="未着手">未着手</MenuItem>
                    <MenuItem value="進行中">進行中</MenuItem>
                    <MenuItem value="完了">完了</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
    )
}

export default TodoListComponent;
