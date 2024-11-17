export default function Header({ }) {

    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            position: 'fixed', 
            top: 0, 
            left: 0,
            width: '100%', 
            backgroundColor: 'white', 
            zIndex: 1000, 
            padding: '10px 20px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
        }}>
            <p 
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'rgba(0,0,0,1)'
                }}
            >
                TODOアプリ
            </p>
        </header>
    );
};
