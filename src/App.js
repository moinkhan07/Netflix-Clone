import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import News from "./components/News";
import Login from "./components/Login";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie' element={<Movie/>} /> 
        <Route path='/tvshows' element={<TvShows />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
