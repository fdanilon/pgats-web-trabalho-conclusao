class Cadastro {

    preencherInformacoesCadastro(primeiroNome, sobrenome, nomeEmpresa, endereco, cep, numeroCasa){
        cy.get('input[type=radio]').check('Mrs')
        cy.get('[data-qa="password"]').type('12345')
        cy.get('[data-qa="days"]').select('21')
        cy.get('[data-qa="months"]').select('July')
        cy.get('[data-qa="years"]').select('2000')
        cy.get('input[name="newsletter"]').check()
        cy.get('input[name="optin"]').check()
        cy.get('[data-qa="first_name"]').type(primeiroNome)
        cy.get('[data-qa="last_name"]').type(sobrenome)
        cy.get('[data-qa="company"]').type(nomeEmpresa)
        cy.get('[data-qa="address"]').type(endereco)
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('New York')
        cy.get('[data-qa="city"]').type('New York')
        cy.get('[data-qa="zipcode"]').type(cep)
        cy.get('[data-qa="mobile_number"]').type(numeroCasa)
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
    }
}

export default new Cadastro()