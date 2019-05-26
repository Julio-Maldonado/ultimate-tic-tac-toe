import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const Square = (props) => {
	return (
		<button
			className="square"
			onClick={() => props.onClick()}
		>
			{props.value}
		</button>
	)
}

Square.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string
}
export default Square
