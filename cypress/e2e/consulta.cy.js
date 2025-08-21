describe('Testes de Agendar Consulta', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar agendamento com horário disponível', () => {
        cy.fazerAAgendamentoDeConsultaComDadosValidos()
        cy.validarMensagem('Consulta agendada!')
    })

    it('Validar agendamento sem informar o profissional', () => {
        cy.fazerAAgendamentoDeConsultaSemPreencherOProfissional()
        cy.validarMensagem('Preencha todos os campos obrigatórios')
    })

    it('Validar agendamento sem informar o paciente', () => {
        cy.fazerAAgendamentoDeConsultaSemPreencherOPaciente()
        cy.validarMensagem('Preencha todos os campos obrigatórios')
    })

    it('Validar agendamento sem informar o horário', () => {
        cy.fazerAAgendamentoDeConsultaSemInformarOHorario()
        cy.validarMensagem('Preencha todos os campos obrigatórios')
    })

    it('Validar agendamento sem informar a data', () => {
        cy.fazerAAgendamentoDeConsultaSemInformarAData()
        cy.validarMensagem('Preencha todos os campos obrigatórios')
    })

})