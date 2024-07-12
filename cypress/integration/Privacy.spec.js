it('Testa pagina de privacidade de froma independente', function(){
    cy.visit ('./src/privacy.html')

    cy.contains('Tlking About Testing').should('be.visible')
})  