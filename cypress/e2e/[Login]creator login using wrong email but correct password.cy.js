describe('Open portal article website', () => {
    before('Open the URL',() =>{
      cy.visit('http://localhost:3000/')
      cy.wait(10)
    })
  
    it('user opens creator login popup',() =>{
      cy.contains('Masuk Akun').click()
      cy.get('.ant-dropdown-menu-title-content').contains('Penulis').click()
    })

    it('user fills email and password',() =>{
        cy.get('*[id=login-email]').type('hoho@hehe.com')
        cy.get('*[id=login-password]').type('nggaktau')
    })

    it('user clicks login button',() =>{
        cy.contains('Login').click()
        cy.wait(100).get('*[class=ant-notification-notice-message]').contains('User tidak ditemukan!').should('exist')
    })

})