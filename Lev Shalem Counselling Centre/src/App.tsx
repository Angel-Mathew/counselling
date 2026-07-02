import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Counselling from './pages/Counselling'
import BibleTeaching from './pages/BibleTeaching'
import Courses from './pages/Courses'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="counselling" element={<Counselling />} />
          <Route path="bible-teaching" element={<BibleTeaching />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App