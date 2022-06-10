describe('APP Testing', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'))
    })

    describe('Theme switching', () => {
        it('should change the theme', () => {
            cy.get('#theme-switcher').click()
            cy.get('.ant-layout').should('have.css', 'background-color', 'rgb(9, 9, 9)')
        })
    })


    describe('Country List Testing', () => {

        let countryList
        const fetchCountries = () => cy.request(`${Cypress.env('API_SERVER')}/all`).its('body')

        beforeEach(() => {
            fetchCountries().then(data => countryList = data)
        })


        it('should load the list of country', () => {
            assert.isArray(countryList, 'Response is an array')
        })

        it('should display the full list of country', () => {
            // 12 item are displayed by default in the first page of the list component
            cy.get('.country-item').should('have.length', 12)
        })

        it('should filter the list of country by Search Input', () => {
            cy.get('#country-search-input').find('input').type('unit', { force: true })
            cy.get('#country-search-input').find('button').click()
            cy.get('.country-item').should('have.length', 5)
            
            cy.get('#country-search-input').find('.ant-input-clear-icon').click()
            cy.get('.country-item').should('have.length', 12)
        })

        it('should filter the list of country by Region', () => {
            cy.get('#filter-region-btn').trigger('mouseover')
            // cy.get('.popover').should('be.visible')
        })

    })

    
})

