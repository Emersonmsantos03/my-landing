import AdvCard from '../AdvCard'
import './advantages.css'

let Advantages = () => {
    return(
        <section className='advantages' id='advantages'>
            <div className='advantages-title'>
                <h1>Vantagens de uma <b>Landing Page</b></h1>
            </div>

            <div className='advantages-cards'>
            <AdvCard />
            </div>
            <div className='advantages-bottom'>
            <a href="https://wa.me/554198870232?text=Olá,%20Emerson!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!" target="_blank"><button>Impulsione o seu negócio!!</button></a>
            </div>

        </section>

    )
}

export default Advantages