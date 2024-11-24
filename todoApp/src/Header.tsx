import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


function Header({}) {

    const navigate = useNavigate(); // 遷移用フック

    const handleBackClick = () => {
        navigate(-1); // 前のページに遷移
    };

    return (
        <AppBar 
            position="static" 
            sx={{ 
                backgroundColor: '#1976d2', 
                boxShadow: 'none',
                borderBottom: '1px solid #ddd',
                height: '64px'
            }}
        >
            <Toolbar 
                sx={{
                    display: 'flex', 
                    justifyContent: 'space-between' 
                }}>
                {/* 左側の戻るボタン */}
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    onClick={handleBackClick} 
                    aria-label="back"
                >
                    <ArrowBackIcon />
                </IconButton>

                {/* 中央のタイトル */}
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center', // 中央揃え
                        fontSize: '1.5rem',
                    }}
                >
                    TODOアプリ
                </Typography>

                {/* 右側のスペーサー（ボタンがない場合の余白調整） */}
                <div style={{ width: '48px' }} /> {/* アイコンボタンのサイズと合わせる */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
