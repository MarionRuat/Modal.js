import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

	const Select = (props) => {
		return (
			<select className='c-input__field c-input__field--select' id={props.name} name={props.name} ref={props.refName}>
				{props.options.map((option, i) => {
					return (
						<option value={option.toLowerCase().replace(/ /g, '-')} key={i}>{option}</option>
					)
				})}
			</select>
		)
	}

	const Input = (props) => {
		return (
			<input className='c-input__field' id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} ref={props.refName} />
		)
	}

	return (
		<div className='c-input'>
			{props.label ? <label className='c-input__label' htmlFor={props.name}>{props.label}</label> : ''}
			{props.type === 'select' ? <Select {...props} /> : <Input {...props} />}
		</div>
	)
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	refName: PropTypes.func,
	options: PropTypes.array
}

Input.defaultProps = {
	type: 'text'
}

export default Input;
