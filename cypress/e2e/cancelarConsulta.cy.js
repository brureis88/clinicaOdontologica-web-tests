describe('Cancelamento de Consulta', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar Cancelamento de Agendamento', () => {
        cy.fazerAAgendamentoDeConsultaViaAPI('09:00')
        cy.cancelarAgendamento()
        cy.validarCancelamentoDoAgendamento()
    })

})