import {Routes, Route} from 'react-router-dom';
import App  from './App';
import Home from './Home';
import { NotFound } from './NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};