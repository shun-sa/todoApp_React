import { Box, Button } from '@mui/material';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { useNavigate } from 'react-router-dom';
import { DeleteTodoListMutation } from './API';
import { deleteTodoList } from './graphql/mutations';

function HomeButtonComponent() {

  // コンポーネント切り替えの設定
  const navigate = useNavigate();
  const handleCreateTodo = () => navigate('/create');


  // APIクライアントの生成
  const client = generateClient();

  // Todo削除ボタン押下時の処理
  function handleDeleteTodo() {
    // ポップアップで削除したいIDを入力
    const inputId = prompt('削除するTodoのIDを入力してください:');

    // 入力値が空の場合は処理を中断
    if (!inputId) {
      alert('IDが入力されていません。');
      return;
    }

    // 入力値を数値に変換
    const idToDelete = parseInt(inputId, 10);

    // Todo削除処理(API呼び出し)
    const result: Promise<GraphQLResult<DeleteTodoListMutation>> = client.graphql({
      query: deleteTodoList,
      variables: {
        input: {
          id: idToDelete,
        },
      },
    });

    // レスポンスの処理
    result.then((data) => {
      if (data) {
        alert(`ID ${idToDelete} のTodoを削除しました。`);
      } else {
        alert(`ID ${idToDelete} のTodo削除に失敗しました。`);
      }
    })
    .catch(() => {
      alert(`ID ${idToDelete} のTodo削除中にエラーが発生しました。`);
    });

    // ページをリロード
    window.location.reload();
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2, // ボタン間の間隔
        mt: 3, // 検索フォームとの間隔
        mb: 3, // テーブルとの間隔
      }}
    >
      <Button
        onClick={handleCreateTodo}
        variant="contained"
        color="primary"
        sx={{
          px: 4, // 横方向の余白を増やす
          py: 1.5, // 縦方向の余白を増やす
          textTransform: 'none', // 大文字化を無効化
          borderRadius: 2, // ボタンを角丸に
          fontSize: '16px', // ボタン内の文字サイズを調整
        }}
      >
        新規Todo作成
      </Button>

      <Button
        onClick={handleDeleteTodo}
        variant="outlined"
        color="secondary"
        sx={{
          px: 4,
          py: 1.5,
          textTransform: 'none',
          borderRadius: 2,
          fontSize: '16px',
        }}
      >
        Todo削除
      </Button>
    </Box>
  );
}

export default HomeButtonComponent;