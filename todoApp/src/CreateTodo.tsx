import { createTodoList } from './graphql/mutations'
import { generateClient } from 'aws-amplify/api'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react';
import { listTodoLists } from './graphql/queries';

function CreateTodo() {
  
  const client = generateClient();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('未着手');

  // Todo登録処理
  const handleSubmit = () => {

    // タイトルと詳細が入力されているかチェック
    if (title.trim() && description.trim()) {

      // Todoを作成
      createTodo(title, description, status);

      // フォームを初期化
      setTitle('');
      setDescription('');
      setStatus('未着手');

    } 
    else {

      alert('タイトルと詳細を入力してください。');

    }
  }

  // 新規Todoを作成
  async function createTodo(title: string, description: string, status: string) {

    // Idを取得
    const id = await fetchId();

    // 新規Todoを作成(API呼び出し)
    const result = await client.graphql({
      query: createTodoList,
      variables: {
        input: {
          id: id,
          title: title,
          description: description,
          status: status,
        },
      },
    });

    console.log(result);
    alert('Todoを作成しました。');

  }

  // Idを取得
  async function fetchId(): Promise<number> {

    try {
      // Todoリストを取得（API呼び出し）
      const result = await client.graphql({
        query: listTodoLists,
      });

      if (result && result.data?.listTodoLists?.items) {
        // Idのリストを初期化
        const usedIds: number[] = result.data.listTodoLists.items
          .map((item) => item?.id ?? 0)
          .filter((id) => id > 0);

        // 空いているIDを探す
        const emptyId: number = findEmptyId(usedIds);

        console.log('空いているID:', emptyId);
        return emptyId;
      } 
      else {
        console.error('Todoリストの取得に失敗しました');
        return 1; // デフォルトID
      }
    } catch (error) {
      console.error('fetchIdでエラーが発生しました:', error);
      return 1; // エラー時のデフォルトID
    }
  }

  // 空いているIDを探す関数
function findEmptyId(usedIds: number[]): number {
  const sortedIds = usedIds.filter(id => id > 0).sort((a, b) => a - b); // IDをソート
  let currentId = 1;

  console.log( 'sortIds : ' +sortedIds);

  for (const id of sortedIds) {
    if (id !== currentId) {
      console.log( 'currentId(sort後) : ' +currentId);
      return currentId; // 空いている最小のIDを返す
    }
    currentId++;
  }

  console.log( 'currentId : ' +currentId);
  return currentId; // 連続している場合、次のIDを返す
}

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // フォームの項目間のスペース
          maxWidth: 400,
          margin: '0 auto',
          mt: 3, // 上部マージン
        }}
      >
        {/* タイトル入力 */}
        <TextField
          label="タイトル"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />

        {/* 詳細入力 */}
        <TextField
          label="詳細"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={3}
        />

        {/* ステータス選択 */}
        <FormControl fullWidth>
          <InputLabel id="status-label">ステータス</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="ステータス"
          >
            <MenuItem value="未着手">未着手</MenuItem>
            <MenuItem value="進行中">進行中</MenuItem>
          </Select>
        </FormControl>

        {/* 登録ボタン */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Todo登録
        </Button>
      </Box>
    </>
  )
}
  
  export default CreateTodo;