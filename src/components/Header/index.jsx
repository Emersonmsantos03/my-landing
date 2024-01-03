
import Logo from '/public/img/logo-branco-azul.svg';
import './header.css'
import { useState } from 'react';






let Header = () => {

const[active, setMode] = useState(false);
const ToggleMode = () => {
    setMode(!active)
}
    
    return(
        <header className='header'>
            <div className='logotipo' >
            <img src={Logo} alt='Logo Emerson Moraes'/>
            </div>
            <div className='nav'>
            <a href='#about'>Início</a>
            <a href="#landingPage">LandingPage</a>
            <a href='#advantages'>Vantagens</a>
            <a href='#skills'>Habilidades</a>
            <a href='#contact'>Contato</a>
            </div>
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                <div className='hamburguer hamburguerIcon'>
                </div>
            </div>
            <div className={active ? "menu menuOpen" : " menu menuClose"}>
            
            <div className='buttons'>
                <div className='listItens'>
            <a href='#about'>Início</a>
            <a href="#landingPage">LandingPage</a>
            <a href='#advantages'>Vantagens</a>
            <a href='#skills'>Conhecimentos</a>
            <a href='#contact'>Contato</a>

            </div>
            </div>
            </div>
            </header>
    )
}





export default Header;