describe('adding a restaurant', () => {
	it('displays the restaurant in the list', () => {
		const restaurantName = 'Sushi Place';
		cy.visit('http://localhost:1234');
		cy.get('[data-set="addRestaurantButton"]').click();
		cy.get('[data-set="newRestaurantName"]').type(restaurantName);
		cy.get('[data-set="saveNewRestaurantName"]').click();
		cy.contains(restaurantName);
	});
});
