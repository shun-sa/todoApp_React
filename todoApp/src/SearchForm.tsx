import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
/*
  課題2
  Stateを管理するためにReact hooksの機能をインポートする。
*/

// 検索フォームのProps型定義
interface SearchFormProps {
    onSearch: (searchText: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {

    // 検索文字列のState管理
    /* 
      課題2
      検索する文字列をStateで管理する。
    */

    // 検索ボタン押下時の処理
    function handleSearch() {
      /*
        課題2
        検索文字列をStateから取得する。
        文字列はonSearch関数に渡す。
      */

    }

    // 検索文字列の変更時の処理
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        /*
          課題2
          検索する文字列をStateに格納する。
          検索する文字列は、'event.target.value'で取得できる。 
        */

    };
    
    // クリアボタン押下時の処理
    const handleClear = () => {
        /*
          課題2
          検索する文字列のStateを空文字にする。
        */

        onSearch('');
    };

    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          mt: 4,
          px: 2,
          width: '100%',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="検索文字を入力（詳細情報の検索）"
          /* 
            課題2
            valueに検索文字列のStateを設定する。
            value={State名}
          */ 

          onChange={handleSearchChange}
          fullWidth
          sx={{
            maxWidth: 600,
            borderRadius: 4,
            backgroundColor: '#f5f5f5',
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: 
              /* 
                課題2
                以下のように編集することで、クリアボタンを表示する。
                State名 && 
              */ (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButton
          onClick={handleSearch}
          sx={{
            ml: 2,
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
            p: 1.5,
            borderRadius: '50%',
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    );
}

export default SearchForm;