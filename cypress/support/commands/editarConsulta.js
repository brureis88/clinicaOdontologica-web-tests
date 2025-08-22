Cypress.Commands.add('editarAgendamentoComDadosValidos', (profissionalAgendar, horarioAgendar) => {
    cy.reload()
    const horarioAltarado = "12:00"
    cy.wrap(horarioAltarado).as('horaAlterada')

    cy.get('@agendamentoId').then(agendamentoId => {
        cy.xpath(`//button[@title='Editar' and @data-id='${agendamentoId}']`).click()
    })
    cy.xpath(`(//div[@id='modalEditarConsulta']//div[contains(@class,'select-wrapper')]//input[contains(@class,'dropdown-trigger')])[1]`).should('be.visible').click({ force: true })
    cy.xpath(`//span[(text()='${horarioAltarado}')]`).click({ force: true })
    cy.get('#editTipoConsulta').clear().type('Alterando Horário')
    cy.get('#editObs').clear().type('Alterando Horário')
    cy.xpath('//button[text()="Salvar"]').click()
})

Cypress.Commands.add('validarAlteracaoDoAgendamento', () => {
    cy.get('@horaAlterada').then(horaAlterada => {
        cy.get('@agendamentoId').then(agendamentoId => {
            cy.xpath(`//button[@title='Editar' and @data-id='${agendamentoId}']/../../td`).should('contain.text', horaAlterada)
        })
    })

})