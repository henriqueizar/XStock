import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import DownPage from './components/DownPage';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <MainPage />
            <DownPage />
            <Footer />
        </>
    );
};

export default App;