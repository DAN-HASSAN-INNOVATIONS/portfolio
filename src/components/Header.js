// Import Assets
import pics from '../assets/pics.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={pics} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Hassan Ridwanullah</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;