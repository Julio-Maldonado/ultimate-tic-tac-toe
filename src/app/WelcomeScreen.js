import React, { Component } from 'react'
import Welcome from 'react-welcome-page'
import './styles.css'

class WelcomeScreen extends Component {
    state = {
    	history: [{
    		squares: Array(9).fill(null)
    	}],
    	stepNumber: 0,
        xIsNext: true,
    }

    jumpTo = (step) => {
    	this.setState({
    		stepNumber: step,
    		xIsNext: (step % 2) === 0
    	})
    }

    render() {
    	return (
    		<div>
                <div className="welcome-box">
                    {
                        this.props.englishFlag ?
                        (<div>
                            <h1 className='welcome-text'>Welcome to Tic Tac Toe</h1>
                            <h3 className='welcome-text'>Feel free to visit <a href="https://reactjs.org/tutorial/tutorial.html">this site</a> to learn how to make your own tic-tac-toe game with React! :)</h3>
                            <button className="play-game-button" onClick={() => this.props.playGame()}>
                                Play
                            </button>
                        </div>) :
                        (<div>
                            <h1 className='welcome-text'>Bienvenido a Tic Tac Toe</h1>
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
}

export default WelcomeScreen
