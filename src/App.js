import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home, Bac, Work } from './Pages/index';
import { Header, Footer } from './Sections/index';

const App = () => {
    const location = useLocation();

    // List of routes where the Header should not appear
    const hiddenHeaderRoutes = ['/Bac', '/WorkShops'];

    return (
        <>
            {!hiddenHeaderRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/WorkShops" element={<Work />} />
                <Route path="/Bac" element={<Bac />} />
            </Routes>
            <Footer />
        </>
    );
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
