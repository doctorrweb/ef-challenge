describe('API Testing', () => {

    const fetchCountries = () => cy.request(`${Cypress.env('API_SERVER')}/all`).its('body')

    it('should load the list of country', () => {
        fetchCountries().then(data => {
            assert.isArray(data, 'Response is an array')
        })
    })

    // it('should load the list of country', () => {
    //     // fetchCountries().should('have.length', 2)
        
    // })

    // it('should display the list of country', () => {
        
    // })

    
})