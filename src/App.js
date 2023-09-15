import './App.css';
import Login from './Components/Login';
import Register from './Components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missing from "./Components/Missing";
function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='*' Component={Missing} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
