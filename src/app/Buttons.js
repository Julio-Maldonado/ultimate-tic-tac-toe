import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import './styles.css'
import PropTypes from 'prop-types'

class Buttons extends Component {
    state = {
        openModal: false,
        openEndGameModal: false,
        openInstructionsModal: false
    }
		
    nextSquare = -1

    clearGame = () => {
        this.setState({
            history: [{
                    squares: Array(81).fill(null)
            }],
            localWinners: Array(9).fill(null),
            stepNumber: 0
        })
    }

    onOpenModal = () => {
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false})
        this.clearGame()
        this.tie = false
    }

    flipInstructions = () => {
        this.setState({ openInstructionsModal: !this.state.openInstructionsModal})
    }

    endGame = () => {
        this.setState({ openEndGameModal: !this.state.openEndGameModal })
    }

    render() {
        const openEndGameModal = this.state.openEndGameModal
        const openInstructionsModal = this.state.openInstructionsModal

    	return (
    		<div className="buttons">
                {
                    this.props.englishFlag ?
                        (<Modal open={openEndGameModal} onClose={this.endGame} center>
                            <h2>End the Game?</h2>
                            <button className="left-button" onClick={() => this.props.returnToHomeScreen()}>Yes</button>
                            <button className="right-button" onClick={() => this.endGame()}>No</button>
                        </Modal>)
                            :
                        (<Modal open={openEndGameModal} onClose={this.endGame} center>
                            <h2>Terminar el Juego?</h2>
                            <button className="left-button" onClick={() => this.props.returnToHomeScreen()}>Si</button>
                            <button className="right-button" onClick={() => this.endGame()}>No</button>
                        </Modal>)
                }
                {
                    this.props.englishFlag ?
                        (<Modal open={openInstructionsModal} onClose={this.flipInstructions} center>
                            <h2>Win 3 games of tic tac toe in a row. You are sent to the game corresponding to your opponent's last move. If that game has been decided, you can pick any game to play.</h2>
                            <button onClick={() => this.flipInstructions()}>Play</button>
                        </Modal>)
                            :
                        (<Modal open={openInstructionsModal} onClose={this.flipInstructions} center>
                            <h2>Gana 3 juegos de tic tac toe en una fila. Te envían al juego correspondiente al último movimiento de tu oponente. Si ese juego se ha decidido, puedes elegir cualquier juego para jugar.</h2>
                            <button onClick={() => this.flipInstructions()}>Jugar</button>
                        </Modal>)
                }

                <div className="buttons">
                    <button
                        className="left-button"
                        onClick={() => this.endGame()}
                    >
                        {this.props.englishFlag ? "End Game?" : "Terminar el Juego?"}
                    </button>
                    <button
                        className="right-button"
                        onClick={() => this.flipInstructions()}
                    >
                        {this.props.englishFlag ? "How to Play?" : "Como jugar?"}
                    </button>
                </div>
            </div>
    	)
    }
}

Buttons.propTypes = {
	returnToHomeScreen: PropTypes.func,
	englishFlag: false
}

export default Buttons
