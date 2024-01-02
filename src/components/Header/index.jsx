import Buttons from '../Buttons/index';
import Logo from '../Logo/index';
import './header.css'






let Header = () => {
    
    return(
        <header className='header'>
        <nav className='nav'>
            <div>
            <Logo/>
            </div>
            <div className='nav-buttons'>
            <a href='#about'>Início</a>
            <a href='#landingPage'>Landing Page</a>
            <a href='#advantages'>Vantagens</a>
            <a href='#skills'>Conhecimentos</a>
            <a href='#contact'>Contato</a>
            </div>
        </nav>
        </header>
    )
}





export default Header;