describe('Open portal article website', () => {
    before('Open the URL',() =>{
      cy.visit('http://localhost:3000/')
    })
  
    it('user go to reader registration page',() =>{
      cy.contains('Buat Akun').click()
      cy.contains('Pembaca').click()
    })

    it('user fills email and password',() =>{
      cy.wait(10000).get('*[id=email]').type('pembacatest@test.com')
      cy.get('*[id=password]').type('nggaktau')
    })

    it('user clicks Daftar button',() =>{
      cy.contains('Daftarkan Akun').click()
    })
})