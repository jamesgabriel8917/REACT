import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// context 
import { AuthProvider } from './context/AuthContext';

//hooks 
import { useState, useEffect } from 'react';


//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {

  const [user, setUser ] = useState(undefined)
  //const {auth} = useAuthentication()

  const loadingUser = user === undefined

  {/*
  useEffect(() => {

    
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])
  */}

  {/*
  if(loadingUser){
    return <p>Carregando...</p>
  }
  */}

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
      <BrowserRouter>
      <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
