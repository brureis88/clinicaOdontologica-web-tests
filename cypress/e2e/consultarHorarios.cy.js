describe('Consultar Horários', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar horários disponíveis para o profissional', () => {
        cy.selecionarProfissional('Dra. Mariana Costa — Implantodontia')
        cy.validarHorariosDisponiveis()
    })

    it('Validar horários ocupados para o profissional', () => {
        cy.fazerAAgendamentoDeConsultaComDadosValidos('Dra. Ana Paula Santos — Endodontia', '18:00')
        cy.selecionarProfissional('Dra. Ana Paula Santos — Endodontia')
        cy.validarHorariosIndisponiveis('18:00')
    })

})