import React from 'react'
import PropTypes from "prop-types";

const Calc = ({count, handleIncrementClick, handleDecrementClick}) => (
    <div>
        Counter: {count}
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
    </div>
)

Calc.propTypes = {
    count: PropTypes.number,
    handleIncrementClick: PropTypes.func.isRequired,
    handleDecrementClick: PropTypes.func.isRequired,
}

export default Calc
