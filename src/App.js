import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#292A31',
    gold: '#FFB700'
  },
};

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie:Id" element={<Movie/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
