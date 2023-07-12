describe('Open portal article website', () => {
  before('Open the URL',() =>{
    cy.visit('http://localhost:3000/')
    cy.wait(10)
  })

  it('user opens reader login popup',() =>{
    cy.contains('Masuk Akun').click()
    cy.contains('Pembaca').click()
  })

  it('user fills email and password',() =>{
    cy.get('*[id=login-email]').type("test1@test.com")
    cy.get('*[id=login-password]').type("nggaktau")
  })

  it('user clicks login button',() =>{
    cy.get('*[type=submit]').click()
    cy.wait(1000).get('*[class=ant-notification-notice-message]').contains('Login Berhasil!').should('exist')
  })

  it('user clicks logout',() =>{
    cy.wait(10000).get('*[class=ant-space-item]').contains('Hi').click()
    cy.contains('Keluar').click()
  })
})
