import React from 'react';
import NewRestaurantForm from './NewRestaurantForm';

const ReastaurantListPage = () => {
	const handleAddRestaurant = () => {};
	return (
		<div>
			<button data-test='addRestaurantButton'>Add Restaurant</button>
			<NewRestaurantForm onSave={handleAddRestaurant} />
		</div>
	);
};

export default ReastaurantListPage;
