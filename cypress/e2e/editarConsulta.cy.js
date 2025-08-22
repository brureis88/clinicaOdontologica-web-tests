describe('Editar Consulta', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar edição de agendamento com horário disponível', () => {
        cy.fazerAAgendamentoDeConsultaViaAPI('11:00')
        cy.editarAgendamentoComDadosValidos()
        cy.validarAlteracaoDoAgendamento()
    })

})