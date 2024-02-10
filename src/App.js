
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import Support from './components/Support'
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Mainheader from './components/Mainheader';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Mainheader></Mainheader>}>
          {/* Default Route */}
          <Route index element={<Home></Home>} />
          <Route path='/support' element={<Support></Support>} />
          <Route path='/About' element={<About></About>} />
          <Route path='/labs' element={<Labs></Labs>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Route>

      </Routes>
    </div> 
  );
}

export default App;
