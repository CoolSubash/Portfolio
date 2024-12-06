
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import Layout from './Outlet/Layout';


function App() {
 

  return (
    <>
      <Router>
    
      <main>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorites /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
         
          
        </Routes>
      </main>
     
    </Router>
    </>
  )
}

export default App
