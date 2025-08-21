require('cypress-xpath')

describe('Testes de Agendar Consulta', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar agendamento com horário disponível', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        const yyyy = tomorrow.getFullYear()
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0')
        const dd = String(tomorrow.getDate()).padStart(2, '0')
        const dateStr = `${yyyy}-${mm}-${dd}`

        cy.get('#pacienteSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='João Pedro Almeida (123.456.789-00)']").click({ force: true })
        cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='Dra. Ana Paula Santos — Endodontia']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.xpath(`//span[text()='10:00']`).click()
        cy.get('#tipoConsultaInput').type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
        cy.get('.toast').should('have.text', 'Consulta agendada!')
    })
    
    it('Validar agendamento sem informar o profissional', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        const yyyy = tomorrow.getFullYear()
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0')
        const dd = String(tomorrow.getDate()).padStart(2, '0')
        const dateStr = `${yyyy}-${mm}-${dd}`

        cy.get('#pacienteSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='João Pedro Almeida (123.456.789-00)']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get('#tipoConsultaInput').type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
        cy.get('.toast').should('have.text', 'Preencha todos os campos obrigatórios')
    })
    
    it('Validar agendamento sem informar o paciente', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        const yyyy = tomorrow.getFullYear()
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0')
        const dd = String(tomorrow.getDate()).padStart(2, '0')
        const dateStr = `${yyyy}-${mm}-${dd}`
        cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='Dra. Ana Paula Santos — Endodontia']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.xpath(`//span[text()='09:00']`).click()
        cy.get('#tipoConsultaInput').type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
        cy.get('.toast').should('have.text', 'Preencha todos os campos obrigatórios')
    })
    
    it('Validar agendamento sem informar o horário', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        const yyyy = tomorrow.getFullYear()
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0')
        const dd = String(tomorrow.getDate()).padStart(2, '0')
        const dateStr = `${yyyy}-${mm}-${dd}`
        cy.get('#profissionalSelect').parent().find('input.select-dropdown').click({ force: true })
        cy.xpath("//span[text()='Dra. Ana Paula Santos — Endodontia']").click({ force: true })
        cy.get('#dataInput').type(dateStr)
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get(':nth-child(4) > :nth-child(2) > .select-wrapper > .dropdown-trigger').click()
        cy.get('#tipoConsultaInput').type('Limpeza')
        cy.get('#obsInput').type('Teste automatizado')
        cy.get('#btnAgendar').click()
        cy.get('.toast').should('have.text', 'Preencha todos os campos obrigatórios')
    })

})