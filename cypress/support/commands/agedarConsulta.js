require('cypress-xpath')

Cypress.Commands.add('fazerAAgendamentoDeConsultaComDadosValidos', (profissionalAgendar, horarioAgendar) => {
    cy.preencherData().then(dateStr => {
        cy.get('#pacienteSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='João Pedro Almeida (123.456.789-00)']").click({ force: true })
        cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath(`//span[text()='${profissionalAgendar}']`).click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.xpath(`//span[text()='${horarioAgendar}']`).click()
        cy.get('#tipoConsultaInput').type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
    })
})

Cypress.Commands.add('fazerAAgendamentoDeConsultaSemPreencherOProfissional', () => {
    cy.preencherData().then(dateStr => {
        cy.get('#pacienteSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='João Pedro Almeida (123.456.789-00)']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get('#tipoConsultaInput').click().type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
    })
})

Cypress.Commands.add('fazerAAgendamentoDeConsultaSemPreencherOPaciente', () => {
    cy.preencherData().then(dateStr => {
        cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='Dra. Ana Paula Santos — Endodontia']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.xpath(`//span[text()='09:00']`).click()
        cy.get('#tipoConsultaInput').click().type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
    })
})

Cypress.Commands.add('fazerAAgendamentoDeConsultaSemInformarOHorario', () => {
    cy.preencherData().then(dateStr => {
        cy.get('#pacienteSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='João Pedro Almeida (123.456.789-00)']").click({ force: true })
        cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='Dra. Ana Paula Santos — Endodontia']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get('#tipoConsultaInput').click().type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
    })
})

Cypress.Commands.add('fazerAAgendamentoDeConsultaSemInformarAData', () => {
    cy.get('#pacienteSelect').parent().find('input.select-dropdown').click({ force: true })
    cy.xpath("//span[text()='João Pedro Almeida (123.456.789-00)']").click({ force: true })
    cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
    cy.xpath("//span[text()='Dra. Ana Paula Santos — Endodontia']").click({ force: true })
    cy.get('#tipoConsultaInput').click().type('Limpeza')
    cy.get('#obsInput').type('Teste automatizado')
    cy.get('#btnAgendar').click()

})

Cypress.Commands.add('fazerAAgendamentoDeConsultaViaAPI', (horarioAgendar) => {
    cy.preencherData().then(dateStr => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/consultas/agendar',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                pacienteId: 1,
                profissionalId: 1,
                data: dateStr,
                horario: horarioAgendar,
                tipoConsulta: 'Agend. API',
                observacoes: 'Agendado via API'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.wrap(response.body.data.id).as('agendamentoId')
        })
    })

})