Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Sarah')
    cy.get('#lastName').type('Camargo')
    cy.get('#email').type('camargo_@outlook.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
})
