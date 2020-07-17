import React, { useState } from 'react';

const NewRestaurantForm = ({ onSave }) => {
	const [input, setInput] = useState('');
	const handleSave = () => {
		onSave(input);
	};
	return (
		<div>
			<input
				type='text'
				data-test='newRestaurantName'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				data-test='saveNewRestaurantButton'
				onClick={() => handleSave()}
			>
				Add
			</button>
		</div>
	);
};

export default NewRestaurantForm;
