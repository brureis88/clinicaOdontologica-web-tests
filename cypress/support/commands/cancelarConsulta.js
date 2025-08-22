Cypress.Commands.add('cancelarAgendamento', (profissionalAgendar, horarioAgendar) => {
    cy.reload()
    cy.get('@agendamentoId').then(agendamentoId => {
        cy.xpath(`//button[@title='Cancelar' and @data-id='${agendamentoId}']`).click()
    })
})

Cypress.Commands.add('validarCancelamentoDoAgendamento', () => {
    cy.get('@agendamentoId').then(agendamentoId => {
        cy.xpath(`//button[@title='Editar' and @data-id='${agendamentoId}']/../../td`).should('contain.text', 'cancelada')
    })
})