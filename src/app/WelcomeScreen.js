import React from 'react'
import Welcome from 'react-welcome-page'
import './styles.css'
import PropTypes from 'prop-types'

const WelcomeScreen = (props) => {
    return (
        <div>
            <div className="welcome-box">
                {
                    props.englishFlag ?
                        (<div>
                            <h1 className='welcome-text'>Welcome to Ultimate Tic Tac Toe</h1>
                            <h3 className='welcome-text'>Feel free to visit <a href="https://reactjs.org/tutorial/tutorial.html">this site</a> to learn how to make your own tic-tac-toe game with React! :)</h3>
                            <button className="play-game-button" onClick={() => props.playGame()}>
                                Play
                            </button>
                        </div>)
                        :
                        (<div>
                            <h1 className='welcome-text'>Bienvenido a Ultimate Tic Tac Toe</h1>
                            <h3 className='welcome-text'>¡Siéntete libre de visitar <a href="https://es.reactjs.org/tutorial/tutorial.html">este sitio</a> para aprender cómo hacer tu propio juego de tic-tac-toe con React! :)</h3>
                            <button className="play-game-button" onClick={() => props.playGame()}>
                                Jugar
                            </button>
                        </div>)
                }
                <button className="language-button" onClick={() => props.updateLanguage()}>
                    {props.englishFlag ? "Espanol" : "English"}
                </button>
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
                ]} />
        </div>
    )
}

Welcome.propTypes = {
    englishFlag: PropTypes.bool,
    playGame: PropTypes.func,
    updateLanguage: PropTypes.func
}

export default WelcomeScreen
