describe('API Testing', () => {

    let countryList
    const fetchCountries = () => cy.request(`${Cypress.env('API_SERVER')}/all`).its('body')

    beforeEach(() => {
        fetchCountries().then(data => countryList = data)
    })


    it('should load the list of country', () => {
        assert.isArray(countryList, 'Response is an array')
    })

    it('should display the list of country', () => {
        // fetchCountries().should('have.length', 2)
        
    })

    // it('should display the list of country', () => {
        
    // })

    
})