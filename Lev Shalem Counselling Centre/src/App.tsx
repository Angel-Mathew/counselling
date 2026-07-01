import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Counselling from './pages/Counselling';
import BibleTeaching from './pages/BibleTeaching';
import Courses from './pages/Courses';
import Media from './pages/Media';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonial';
import Contact from './pages/Contact';
import Footer from './components/Footer'; 

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
          <Route path="media" element={<Media />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;