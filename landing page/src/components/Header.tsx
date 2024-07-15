import React from 'react';
import '../styles/header.css';



const Header: React.FC = () => {
    return (
        <header className="header">
            <a className="logo" href="#">XS</a>
            <nav className="navbar">
                <a href="#">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#redesfooter">Contato</a>
            </nav>
        </header>
    );
};

export default Header;