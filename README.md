# Projeto de Testes Automatizados - Clínica Odontológica

Este repositório contém os testes automatizados end-to-end (E2E) utilizando Cypress para o sistema da Clínica Odontológica.

## Pré-requisitos

- Node.js (recomendado: versão 18+)
- npm ou yarn
- Clonar e rodar os projetos de API e Frontend:
  - [API - clinicaOdontologica-api](https://github.com/brureis88/clinicaOdontologica-api)
  - [Frontend - clinicaOdontologica-web](https://github.com/brureis88/clinicaOdontologica-web)

## Como iniciar o ambiente

### 1. Inicie a API

Clone o repositório da API e siga as instruções do README de lá. Geralmente:

```bash
git clone https://github.com/brureis88/clinicaOdontologica-api.git
cd clinicaOdontologica-api
npm install
npm start
```

A API deve rodar na porta 3000 (ou conforme configuração do projeto).

### 2. Inicie o Frontend

Clone o repositório do frontend e siga as instruções do README de lá. Geralmente:

```bash
git clone https://github.com/brureis88/clinicaOdontologica-web.git
cd clinicaOdontologica-web
npm install
npm start
```

O frontend deve rodar na porta 3001 (ou conforme configuração do projeto).

### 3. Inicie os testes E2E

No diretório deste projeto de testes:

```bash
npm install
```

Para abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Para rodar os testes em modo headless:

```bash
npm run test
```

## Estrutura do Projeto

- `cypress/e2e/` - Cenários de testes automatizados
- `cypress/fixtures/` - Dados de apoio para os testes
- `cypress/support/` - Comandos customizados e configurações

## Observações

- Certifique-se de que a API e o Frontend estejam rodando antes de executar os testes.
- Os testes assumem as portas padrão (API: 3000, Front: 3001). Se alterar, ajuste a configuração do Cypress.

---

## 📝 Licença

Este projeto é destinado exclusivamente para estudos de teste de software.

**Desenvolvido por Bruno Reis**
