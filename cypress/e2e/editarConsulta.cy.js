describe('Testes de Editar Consulta', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar edição de agendamento com horário disponível', () => {
        cy.fazerAAgendamentoDeConsultaViaAPI()
        cy.editarAgendamentoComDadosValidos()
        cy.validarAlteracaoDoAgendamento()
    })

})