import './App.css';
import { BrowserRouter,Route,Routes,NavLink ,Navigate} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import 'rsuite/dist/rsuite.min.css';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; 
import NewLogin from './components/NewLogin/NewLogin';
import NewRegister from './components/NewRegister/NewRegister';
// import Cookies from 'js-cookie';

function App() {
  const userToken = localStorage.getItem("token");
  const isAuthenticated = !!userToken;
  return (
    
    <BrowserRouter >
    <Routes>
    {isAuthenticated ? (
          <Route path="/*" element={<Home />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        
        <Route path="/login" element={<NewLogin />} />
        <Route path="/register" element={<NewRegister />} />
        {/* <Route path="/register" element={<NewReg />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;