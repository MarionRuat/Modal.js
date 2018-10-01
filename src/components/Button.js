import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<button className='c-button' onClick={props.handleClick} ref={props.refName}>
			{props.children}
		</button>
	)
}

Button.propTypes = {
	handleClick: PropTypes.func,
	refName: PropTypes.func
}

export default Button;
