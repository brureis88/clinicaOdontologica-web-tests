Cypress.Commands.add('validarMensagem', (mensagem) => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('preencherData', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    const yyyy = tomorrow.getFullYear()
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0')
    const dd = String(tomorrow.getDate()).padStart(2, '0')
    const dateStr = `${yyyy}-${mm}-${dd}`
    
    return dateStr
})
