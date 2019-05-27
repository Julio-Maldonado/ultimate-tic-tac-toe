import React from 'react'
import {getStyle} from './helperFunctions'
import './styles.css'
import PropTypes from 'prop-types'

const Square = (props) => {
	let style = getStyle(props.num, props.value, props.belongsTo, props.green)

	return (
		<button
			style={style}
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
