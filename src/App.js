import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Navs from './components/nav/Navs';
import Search from './pages/Search';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#292A31',
    gold: '#FFB700',
    rust: '#b7410e',
    silver: '#C0C0C0',
  },
};

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navs />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie:Id" element={<Movie/>}/>
        <Route path="/search:Query" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
