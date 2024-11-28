import {Routes, Route} from 'react-router-dom';
import App  from './App';
import Home from './Home';
import CreateTodo from './CreateTodo';
import { NotFound } from './NotFound';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create" element={<CreateTodo/>} />
        {/* 
            課題1
            新規Todo登録画面のpathを設定する。 
        */}
      </Route>
    </Routes>
  );
};