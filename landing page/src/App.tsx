import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import DownPage from './components/DownPage';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <MainPage />
            <DownPage />
        </>
    );
};

export default App;