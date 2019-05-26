import React, { Component } from 'react'
import {calculateWinner} from './helperFunctions'
import Board from './Board'
import './styles.css'
import Modal from 'react-responsive-modal'

class Game extends Component {
    state = {
    	history: [{
    		squares: Array(9).fill(null)
    	}],
    	stepNumber: 0,
		xIsNext: true,
		openModal: false,
    }

    jumpTo = (step) => {
    	this.setState({
    		stepNumber: step,
    		xIsNext: (step % 2) === 0
    	})
    }

    handleClick = (i) => {
    	const history = this.state.history.slice(0, this.state.stepNumber + 1)
    	const current = history[history.length - 1]
    	const squares = current.squares.slice()

    	if (calculateWinner(squares) || squares[i])
    		return

    	squares[i] = this.state.xIsNext ? 'X' : 'O'
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
    			squares: Array(9).fill(null)
			}],
			stepNumber: 0
		})
	}

	onOpenModal = () => {
		this.setState({ openModal: true });
	};

	onCloseModal = () => {
		this.setState({ openModal: false});
		this.clearGame()
		this.tie = false
	};

    render() {
		const openModal = this.state.openModal

    	const history = this.state.history
    	const current = history[this.state.stepNumber]
    	const winner = calculateWinner(current.squares)

    	const moves = history.map((step, move) => {
			let desc
			if (this.props.englishFlag)
				desc = move ? 'Go to move #' + move : 'Go to game start'
			else 
				desc = move ? 'Ir a moverse #' + move : 'Ir al inicio del juego'
			
    		return (
    			<li key={move}>
    				<button onClick={() => this.jumpTo(move)}>{desc}</button>
    			</li>
    		)
    	})

    	let status
    	if (winner && !openModal) {
			if (this.props.englishFlag)
				status = 'Winner: ' + winner
			else 
				status = 'Ganador: ' + winner
			this.onOpenModal()
		}
    	else {
			if (this.props.englishFlag)
				status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
			else 
				status = 'Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O')
			
		}

		if (history.length === 10 && !openModal) {
			this.tie = true
			this.onOpenModal()
		}

    	return (
    		<div className="game">
				{
                    this.props.englishFlag ?
				(<Modal open={openModal} onClose={this.onCloseModal} center>
					{this.tie ? <h2>It's a tie!</h2> : <h2>Congrats Player {winner}!</h2>}					
					<button onClick={() => this.onCloseModal()}>Play Again</button>
					<button onClick={() => this.props.returnToHomeScreen()}>Go Back</button>
				</Modal>) :
				(<Modal open={openModal} onClose={this.onCloseModal} center>
					{this.tie ? <h2>Es una empate!</h2> : <h2>Felicidades Jugador {winner}!</h2>}					
					<button onClick={() => this.onCloseModal()}>Juega de Nuevo</button>
					<button onClick={() => this.props.returnToHomeScreen()}>Regresa</button>
				</Modal>)
				}
    			<div className="game-board">
    				<Board
    					squares={current.squares}
    					onClick={(i) => this.handleClick(i)}
    				/>
    			</div>
    			<div className="game-info">
    				<div>{status}</div>
    				<ol>{moves}</ol>
    			</div>
    		</div>
    	)
    }
}

export default Game
