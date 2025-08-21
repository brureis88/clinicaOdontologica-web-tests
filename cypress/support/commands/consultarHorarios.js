require('cypress-xpath')

Cypress.Commands.add('selecionarProfissional', (profissional) => {
    cy.preencherData().then(dateStr => {
        cy.xpath(`//span[text()='Dra. Mariana Costa — Implantodontia']`).click({ force: true })
        cy.xpath(`//span[text()='${profissional}']`).click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
    })
})

Cypress.Commands.add('validarHorariosDisponiveis', () => {
    const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    horarios.forEach(horario => {
        cy.get('.dropdown-content.select-dropdown span').contains(horario).should('exist')
    })
})

Cypress.Commands.add('validarHorariosIndisponiveis', (horario) => {
    cy.get('.dropdown-content.select-dropdown span').contains(horario).should('not.exist')
})