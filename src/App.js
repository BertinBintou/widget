import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Profil from './components/Profil';
import Github from './components/git/Github';
import Appgit from './components/git/Appgit';
import SpaceX from './components/spacex/SpaceX';
import LaunchCard from './components/spacex/LaunchCard';
import Cat from './components/cat/Cat';
import Book from './components/Book/Book';
import  CardBook from './components/Book/CardBook' 
import Movie from './components/movie/Movie';
import GitRepo from './components/git/GitRepo';
import Convert from './components/convert/Convert';
import News from './components/News';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Profil />} />
        <Route path="/github" element={<Github />} />
        <Route path="/appgit" element={<Appgit />} />
        <Route path="/spacex" element={<SpaceX />} />
        <Route path="/launch" element={<LaunchCard />} />
        <Route path="/cat"    element={<Cat/>} />
        <Route path="/book"   element={<Book/>} />
        <Route path="/cardbook" element={< CardBook/>} />
        <Route path="/movie"    element={< Movie/>} />
        <Route path="/git"    element={< GitRepo/>} />
        <Route path="/convert" element={< Convert/>} />
        <Route path="/news" element={< News/>} />
       </Routes>



     
    </div>
  
  );
}

export default App;
