import React from 'react'
import Welcome from 'react-welcome-page'
import './styles.css'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const data = [
	{
	  link: 'https://github.com/Julio-Maldonado',
	  label: 'Github',
	  icon: faGithub,
	},
	{
	  link: 'https://www.facebook.com/julio.maldonado.904',
	  label: 'Facebook',
	  icon: faFacebook,
	},
	{
	  link: 'https://www.instagram.com/_julio_maldonado/',
	  label: 'Instagram',
	  icon: faInstagram,
	},
	{
	  link: 'https://www.linkedin.com/in/juliom72/',
	  label: 'LinkedIn',
	  icon: faLinkedinIn,
	},
	// {
	//   link: 'https://angel.co/michael-d-angelo',
	//   label: 'Angel List',
	//   icon: faAngellist,
	// },
	// {
	//   link: 'https://twitter.com/dangelosaurus',
	//   label: 'Twitter',
	//   icon: faTwitter,
	// },
	{
	  link: 'mailto:julio.maldonado.guzman@gmail.com',
	  label: 'Email',
	  icon: faEnvelope,
	},
];

class WelcomeScreen extends React.Component {
    render() {
        return (
            <div>
                <div className="welcome-box">
                    {
                        this.props.englishFlag ?
                            (<div>
                                <h1 className='welcome-text'>Welcome to Ultimate Tic Tac Toe</h1>
                                <h3 className='welcome-text'>Feel free to visit <a href="https://reactjs.org/tutorial/tutorial.html">this site</a> to learn how to make your own tic-tac-toe game with React! :)</h3>
                                <button className="play-game-button" onClick={() => this.props.playGame()}>
                                    Play
                                </button>
                            </div>)
                            :
                            (<div>
                                <h1 className='welcome-text'>Bienvenido a Ultimate Tic Tac Toe</h1>
                                <h3 className='welcome-text'>¡Siéntete libre de visitar <a href="https://es.reactjs.org/tutorial/tutorial.html">este sitio</a> para aprender cómo hacer tu propio juego de tic-tac-toe con React! :)</h3>
                                <button className="play-game-button" onClick={() => this.props.playGame()}>
                                    Jugar
                                </button>
                            </div>)
                    }
                    <button className="language-button" onClick={() => this.props.updateLanguage()}>
                        {this.props.englishFlag ? "Espanol" : "English"}
                    </button>
                </div>
                <div id="footer-welcome"  ref={(div) => { this.descriptionDiv = div; }}>
                    <ul className="icons-welcome">
                        {data.map(s => (
                            <li key={s.label}><a href={s.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a></li>
                        ))}
                    </ul>
                    <p className="copyright-welcome">&copy; Julio Maldonado <a href={"https://juliomaldonado.com"} target="_blank" rel="noopener noreferrer">juliomaldonado.com</a></p>
                </div>
                <Welcome
                    loopDuration={1000}
                    data={[
                        {
                            "backgroundColor": "rgb(73, 49, 91)",
                            "textColor": "#EE79EA",
                            "imageAnimation": "flipInX",
                            "image": require('../images/tictactoefun.png'),
                            "text": "Thanks for visiting!",
                            "textAnimation": "slideInLeft",
                        },
                        {
                            "backgroundColor": "rgb(30, 73, 91)",
                            "textColor": "#00FFFF",
                            "imageAnimation": "flipInY",
                            "image": require('../images/tictactoefun.png'),
                            "text": "Gracias por su visita!",
                            "textAnimation": "slideInLeft",
                        }
                    ]}
                />
            </div>
        )
    }
}

Welcome.propTypes = {
    englishFlag: PropTypes.bool,
    playGame: PropTypes.func,
    updateLanguage: PropTypes.func
}

export default WelcomeScreen
