import React from 'react';
import '../styles/down-page.css';

const DownPage: React.FC = () => {
    return (
        <div id="down" className="down-page-div">
            <div className="benefits-div">
                <h1>Fácil, versátil e eficiente.</h1>
                <div className="benefitsss">
                    <div>
                        <img src='/images/checkup.png' alt="Organize com facilidade" />
                        <h1>Organize com facilidade</h1>
                        <p>O nosso serviço oferece uma interface limpa e intuitiva, além de disponibilizar vídeos no Youtube sobre todas as ferramentas disponíveis.</p>
                    </div>
                    <div>
                        <img src='/images/devices.png' alt="Utilize em qualquer dispositivo" />
                        <h1>Utilize em qualquer dispositivo</h1>
                        <p>A nossa plataforma pode ser utilizada tanto em PC &#40;Windows, Mac and Linux&#41; quanto em Mobile&#40;IOS e Android&#41;.</p>
                    </div>
                    <div>
                        <img src='/images/global.png' alt="Saiba tudo em qualquer lugar" />
                        <h1>Saiba tudo em qualquer lugar</h1>
                        <p>Com o nosso banco de dados, os status dos seus produtos ficam salvos, e podem ser consultados a qualquer momento, até mesmo offline.</p>
                    </div>
                </div>
                <div className="button">
                    <a href="#down">
                        <button className="button-action">Começar agora</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DownPage;