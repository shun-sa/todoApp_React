import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function Header({}) {

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

            <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        </header>
    );
};
