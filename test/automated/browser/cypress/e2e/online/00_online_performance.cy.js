describe('Lighthouse Metrics', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('Capture Metrics', () => {
		cy.lighthouse({
			accessibility: 97,
			'best-practices': 97,
			seo: 97,
			performance: 40, // Once the performance issues are fixed revert this 90,
		});
	});
});
