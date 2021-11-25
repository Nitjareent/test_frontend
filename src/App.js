import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './pages/Form';
import Header from './components/Header';
import Pokemon from './pages/Pokemon';
import Function1 from './pages/Function1';
import { Routes, Route, Outlet, NavLink as Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="function1" element={<Function1 />} />
          
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <nav>
        <div>
          <Link activeClassName="active" to="/">Home</Link>
        </div>
        <div>
          <Link activeClassName="active" to="/pokemon">Pokemon</Link>
        </div>
        <div>
          <Link activeClassName="active" to="/function1">Function1</Link>
        </div>
        <div>
          <Link activeClassName="active" to="/function2">Function2</Link>
        </div>
        <div>
          <Link activeClassName="active" to="/function3">Function3</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
