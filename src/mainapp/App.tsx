import { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Appbar from '../component/header/Appbar';
import Footer from '../component/footer/Footer';
import { ROUTES } from '../constant/routes';
import Home from '../container/Home';
import Service from '../container/Service';
import Gallery from '../container/Gallery';
import ContactUs from '../container/ContactUs';
import AboutUs from '../container/AboutUs';

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <div>
            <header>
              <Appbar />
            </header>
          </div>
          <div>
            <main>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.SERVICE} element={<Service />} />
                <Route path={ROUTES.ABOUT_US} element={<Gallery />} />
                <Route path={ROUTES.GALLERY} element={<AboutUs />} />
                <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
              </Routes>
            </main>
          </div>
          <div>
            <footer>
              <Footer />
            </footer>
          </div>
        </Suspense>
      </div>
    </>

  );
}

export default App;
