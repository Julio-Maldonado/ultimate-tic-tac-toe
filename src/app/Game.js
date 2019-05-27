import React, { Component } from 'react'
import Board from './Board'
import Buttons from './Buttons'
import Modal from 'react-responsive-modal'
import {calculateWinner} from './helperFunctions'
import './styles.css'
import PropTypes from 'prop-types'

class Game extends Component {
    state = {
    	history: [{
    		squares: Array(81).fill(null),
			}],
			localWinners: Array(9).fill(null),
    	stepNumber: 0,
			xIsNext: true,
			openModal: false,
			openEndGameModal: false,
			openInstructionsModal: false
		}
		
		nextSquare = -1

    handleClick = (i) => {
    	const history = this.state.history.slice(0, this.state.stepNumber + 1)
    	const current = history[history.length - 1]
			const squares = current.squares.slice()

			const localWinners = this.state.localWinners.slice()
			let currentSquareIndex = Math.floor(i / 9)
			let currentSquare = squares.slice(currentSquareIndex * 9, currentSquareIndex * 9 + 9)

			if (this.nextSquare !== currentSquareIndex && this.nextSquare !== -1)
				return
				
    	if (localWinners[currentSquareIndex] || squares[i])
				return

			squares[i] = this.state.xIsNext ? 'X' : 'O'
			currentSquare = squares.slice(currentSquareIndex * 9, currentSquareIndex * 9 + 9)
			// Get the current square by its index using division
			// let currentSquareIndex = Math.floor(i / 9)
			// let currentSquare = squares.slice(currentSquareIndex * 9, currentSquareIndex * 9 + 9)
			// if there is now a winner at currentSquare then mark it off in localWinners
			if (calculateWinner(currentSquare)) {
				localWinners[currentSquareIndex] = this.state.xIsNext ? 'X' : 'O'
				this.setState({
					localWinners: localWinners
				})
			} else {
				let noSolution = false
				for (let i = 0; i < 9; i++) {
					if (currentSquare[i] === null) {
						noSolution = true
						break
					}
				}
				if (!noSolution) {
					localWinners[currentSquareIndex] = 'NO_SOLUTION'
					this.setState({
						localWinners: localWinners
					})
				}
			}

			let nextSquare = i % 9
			// next square has a winner, so they can select any other square
			if (localWinners[nextSquare] === null)
				this.nextSquare = nextSquare
			// they have to go to that square
			else
				this.nextSquare = -1

    	this.setState({
    		history: history.concat([{
    			squares: squares
    		}]),
    		stepNumber: history.length,
    		xIsNext: !this.state.xIsNext
    	})
		}

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
			const openModal = this.state.openModal
			const openEndGameModal = this.state.openEndGameModal
			const openInstructionsModal = this.state.openInstructionsModal

    	const history = this.state.history
			const current = history[this.state.stepNumber]
			const localWinners = this.state.localWinners.slice()
			const winner = calculateWinner(localWinners)

    	let status
			if (winner && !openModal) {
				if (this.props.englishFlag)
					status = 'Winner: ' + winner
				else 
					status = 'Ganador: ' + winner
				this.onOpenModal()
			} else {
					if (this.props.englishFlag)
						status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
					else 
						status = 'Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O')
			}

			if (history.length === 82 && !openModal) {
				this.tie = true
				this.onOpenModal()
			}
    	return (
    		<div className="game">
					{
						this.props.englishFlag ?
							(<Modal open={openModal} onClose={this.onCloseModal} center>
								{this.tie ? <h2>It's a tie!</h2> : <h2>Congrats Player {winner}!</h2>}
								<button className="left-button" onClick={() => this.onCloseModal()}>Play Again</button>
								<button className="right-button" onClick={() => this.props.returnToHomeScreen()}>Go Back</button>
							</Modal>)
								:
							(<Modal open={openModal} onClose={this.onCloseModal} center>
								{this.tie ? <h2>Es una empate!</h2> : <h2>Felicidades Jugador {winner}!</h2>}
								<button className="left-button" onClick={() => this.onCloseModal()}>Juega de Nuevo</button>
								<button className="right-button" onClick={() => this.props.returnToHomeScreen()}>Regresa</button>
							</Modal>)
					}
					<Buttons englishFlag={this.props.englishFlag} returnToHomeScreen={this.props.returnToHomeScreen}/>
    			<div className="game-board">
    				<Board
							nextSquare={this.nextSquare}
							squares={current.squares}
							localWinners={localWinners}
    					onClick={(i) => this.handleClick(i)}
    				/>
    			</div>
    			<div className="game-info">
    				<div>{status}</div>
    			</div>
    		</div>
    	)
    }
}

Game.propTypes = {
	returnToHomeScreen: PropTypes.func,
	englishFlag: false
}

export default Game
