let calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a]
    }
    return null
}

let getStyle = (num, value, belongsTo, green) => {
    let style = {}

    let x = num % 3
	if (x === 0)
		style.borderLeft = "0.2vw solid black"
	else if (x === 2)
		style.borderRight = "0.2vw solid black"
	
	x = num % 9
	if (x >= 0 && x <= 2)
		style.borderTop = "0.2vw solid black"
	else if (x >= 6 && x <= 8)
		style.borderBottom = "0.2vw solid black"
	
	if (value === "X")
		style.color = "red"
	else if (value === "O")
		style.color = "lightblue"

	if (belongsTo === "X")
		style.background = "maroon"
	else if (belongsTo === "O")
		style.background = "blue"
	else if (belongsTo === "NO_SOLUTION")
		style.background = "grey"
	else {
		if (green)
			style.background = "lightgreen"
		else
			style.background = "white"
	}

	return style
}

export {getStyle, calculateWinner}
