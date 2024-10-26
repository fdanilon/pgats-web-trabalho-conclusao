import cadastro from "../cadastro"

class Login {
    preencherLogin(login,senha) {
        cy.get('[data-qa="login-email"]').type(login)
        cy.get('[data-qa="login-password"]').type(senha)
        cy.get('[data-qa="login-button"]').click()
    }

    preencherCadastro(nome,email){
        cy.get('[data-qa="signup-name"]').type(nome)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()

        return cadastro
    }
}

export default new Login()