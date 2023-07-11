describe('Open portal article website', () => {
    before('Open the URL',() =>{
        cy.visit('http://localhost:3000/')
    })
  
    it('user go to creator registration page',() =>{
        cy.contains('Buat Akun').click()
        cy.get('.ant-dropdown-menu-title-content').contains('Penulis').click()
    })

    it('user fills email and password',() =>{
        cy.get('*[id=fullName]').should('be.visible')
        cy.get('*[id=fullName]').type('Paimin')
        cy.get('*[id=email]').type('penulistest@test.com')
        cy.get('*[id=password]').type('nggaktau')
    })

    it('user clicks Daftar button',() =>{
        cy.contains('Daftarkan Akun').click()
    })
})