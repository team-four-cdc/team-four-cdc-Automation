describe('Open portal article website', () => {
    before('Open the URL',() =>{
      cy.visit('http://localhost:3000/')
      cy.wait(10)
    })
  
    it('open reader login popup',() =>{
      cy.contains('Masuk Akun').click()
      cy.contains('Pembaca').click()
    })
  
    it('fill email and password',() =>{
      cy.get('*[id=login-email]').type("hoho@test.com")
      cy.get('*[id=login-password]').type("nggaktau")
    })
  
    it('click login button',() =>{
      cy.get('*[type=submit]').click()
      cy.wait(100).get('*[class=ant-notification-notice-message]').contains('User tidak ditemukan!').should('exist')
    })
  })
  