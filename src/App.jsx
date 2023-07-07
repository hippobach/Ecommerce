// Libraries
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Reset from './pages/Auth/Reset/Reset';

function App() {
    return (
        <Fragment>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset" element={<Reset />} />
                </Routes>
                <Footer />
            </Router>
        </Fragment>
    );
}

export default App;
