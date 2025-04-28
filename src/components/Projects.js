// Import Assets
import proj from '../assets/proj.png';
import vote from '../assets/vote.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Blockchain Rental</h3>
                    <img src={proj} alt="Blockchain rental Page" />
                    <p>
                     Blockchain Rental project for Nigerian Real Estate
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/DAN-HASSAN-INNOVATIONS/demo-repo" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Blockchain Voting</h3>
                    <img src={vote} alt="voting Page" />
                    <p>
                        An outstanding User Interface and smart contract was developed for an online Voting system
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
