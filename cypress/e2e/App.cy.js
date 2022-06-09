describe('theme switching', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000')
    })
    it('should change the theme', () => {
        cy.get('#theme-switcher').click()
        cy.get('.ant-layout').should('have.css', 'background-color', 'rgb(9, 9, 9)')
    })
})