import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from "./pages/NotFound";
import User from './pages/User'
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return ( 
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="mx-auto container pb-12 px-3">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
                <Route path='/user/:login' element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
   );
}

export default App;
