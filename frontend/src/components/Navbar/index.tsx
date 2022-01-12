import {ReactComponent as IconGithub} from 'Assets/img/github.svg';
import './styles.css';

function Navbar(){

    return (
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/VitorCardias">
                <div className="dsmovie-contact-container">
                    <IconGithub/>
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
          </div>
        </nav>
      </header>
    );

}

export default Navbar;