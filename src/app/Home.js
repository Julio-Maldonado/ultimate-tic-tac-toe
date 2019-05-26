import React, { Component } from 'react'
import Game from './Game'
import WelcomeScreen from './WelcomeScreen'
import './styles.css'

class Home extends Component {
    state = {
    	history: [{
    		squares: Array(9).fill(null)
    	}],
    	stepNumber: 0,
        xIsNext: true,
        onHomeScreen: true,
        englishFlag: true,
    }

    componentDidMount() {
        document.title = "Tic-Tac-Toe by Julio"
    }

    playGame = () => {
    	this.setState({
    		onHomeScreen: false
    	})
    }

    returnToHomeScreen = () => {
        this.setState({ 
            onHomeScreen: true
        })
    }

    updateLanguage = () => {
        this.setState({ 
            englishFlag: !this.state.englishFlag
        })
    }

    render() {
        const onHomeScreen = this.state.onHomeScreen
    	return (
            <div>
            {
                onHomeScreen ?
                    <WelcomeScreen 
                        englishFlag={this.state.englishFlag}
                        updateLanguage={this.updateLanguage} 
                        playGame={this.playGame} />
                    : 
                    <Game 
                        englishFlag={this.state.englishFlag}     
                        returnToHomeScreen={this.returnToHomeScreen} />
            }
            </div>
    	)
    }
}

export default Home
