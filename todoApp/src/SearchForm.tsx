import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

interface SearchFormProps {
    onSearch: (searchText: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {

    // 検索文字列のState管理
    const [searchText, setSearchText] = useState('');

    // 検索ボタン押下時の処理
    function handleSearch() {
        onSearch(searchText);
    }

    // 検索文字列の変更時の処理
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    
    // クリアボタン押下時の処理
    const handleClear = () => {
        setSearchText('');
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
          value={searchText}
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
              endAdornment: searchText && (
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