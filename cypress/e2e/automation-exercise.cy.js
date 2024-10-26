/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import locator from '../support/locators.js'
import contato from '../pages/contato/index.js';
import menu from '../pages/menu/index.js';
import login from '../pages/login/index.js';
import cadastro from '../pages/cadastro/index.js'
import produto from '../pages/produto/index.js';
import exclusao from '../pages/exclusao/index.js';
import pagamento from '../pages/pagamento/index.js';



describe('Casos de teste do site Automation Exercise ', () => {

    const randomFullName = faker.person.fullName()
    const randomFirstName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomCompanyName = faker.company.name()
    const randomAddress = faker.location.streetAddress()
    const randomZipCode = faker.location.zipCode()
    const randomNumber = faker.phone.number()
    const randomEmail = faker.internet.email()

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
      })

    it('Test Case 1: Register User', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_login)
        cy.get(locator.cadastro_titulo).should('have.text', 'New User Signup!')

        login.preencherCadastro(randomFullName, randomEmail)
        cy.get(locator.preencher_informacoes_titulo).eq(1).should('be.visible')

        cadastro.preencherInformacoesCadastro(randomFirstName,randomLastName, randomCompanyName, randomAddress, randomZipCode, randomNumber)

        cy.get('[data-qa="continue-button"]').click()
        cy.get(locator.usuario_logado).should('be.visible')

        exclusao.deletarConta()
    });

    it('Test Case 2: Login User with correct email and password', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_login)
        cy.get(locator.login_titulo).should('be.visible')
        login.preencherLogin('testeWeb1@gmail.com', '12345')

        cy.get(locator.usuario_logado).should('be.visible')

        //exclusao.deletarConta()
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_login)
        cy.get(locator.login_titulo).should('be.visible')

        login.preencherLogin('loginIncorreto@gmail.com', 'senhaIncorreta')

        cy.get(locator.label_senha_incorreta).should('contain', 'Your email or password is incorrect!')
    });

    it('Test Case 4: Logout User', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_login)
        cy.get(locator.login_titulo).should('be.visible')

        login.preencherLogin('testeWeb2@gmail.com','12345')
        cy.get(locator.usuario_logado).should('be.visible')

        menu.irPara(locator.menu.pagina_logout)

        cy.url().should('includes', 'login')
    })

    it('Test Case 5: Register User with existing email', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_login)
        cy.get(locator.login_titulo).should('be.visible')

        login.preencherCadastro('testeWeb', 'testeWeb3@gmail.com')
        cy.get(locator.label_email_existente).should('contain', 'Email Address already exist!')
    });

    it('Test Case 6: Contact Us Form', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_contato)

        cy.get(locator.contato_titulo).should('be.visible')

        contato.preencherFormularioContato()

        cy.get(locator.sucesso_contato_form).should('have.text', 'Success! Your details have been submitted successfully.')

        cy.get("a[href='/']").eq(1).click()
        cy.url().should('equal', 'https://www.automationexercise.com/')
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_produtos)

        cy.get(locator.produtos_titulo).should('have.text', 'All Products')
        cy.get(locator.lista_produtos).should('be.visible')
        cy.get("a[href='/product_details/1']").click()

        cy.get(locator.tela_produto.produto_nome).should('be.visible')
        cy.get(locator.tela_produto.produto_preco).should('be.visible')
        cy.get(locator.tela_produto.produto_marca).should('be.visible')
        cy.get(locator.tela_produto.produto_disponibilidade).should('be.visible')
        cy.get(locator.tela_produto.produto_condicao).should('be.visible')
        cy.get(locator.tela_produto.produto_categoria).should('be.visible')
    });

    it('Test Case 9: Search Product', () => {

        const produtoBuscado = "Blue Top"
        cy.get('a[href="/"]').eq(1).should('be.visible')

        menu.irPara(locator.menu.pagina_produtos)

        produto.buscarProduto(produtoBuscado)

        cy.get(locator.produtos_encontrados_titulo).should('be.visible')
        
        cy.get(locator.nome_produto).should('have.text', produtoBuscado)
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        cy.get('a[href="/"]').eq(1).should('be.visible')
        cy.get('input#susbscribe_email').scrollIntoView().type(randomEmail)
        cy.get(locator.label_subscription).should('have.text', 'Subscription')
        cy.get('button#subscribe').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    })

    it('Test Case 15: Place Order: Register before Checkout', () => {
        const produtoBuscado = "Blue Top"
        const randomFullName = faker.person.fullName()
        const randomFirstName = faker.person.firstName()
        const randomLastName = faker.person.lastName()
        const randomCompanyName = faker.company.name()
        const randomAddress = faker.location.streetAddress()
        const randomZipCode = faker.location.zipCode()
        const randomNumber = faker.phone.number()
        const randomEmail = faker.internet.email()

        const randomCardName = faker.finance.accountName()
        const randomCardNumber = faker.finance.accountNumber()
        const randomCardCVC = faker.finance.creditCardCVV()

        cy.get('a[href="/"]').eq(1).should('be.visible')
        menu.irPara(locator.menu.pagina_login)

        login.preencherCadastro(randomFullName, randomEmail)
             .preencherInformacoesCadastro(randomFirstName,randomLastName, randomCompanyName, randomAddress, randomZipCode, randomNumber)

        cy.get('[data-qa="continue-button"]').click()
        cy.get(locator.usuario_logado).should('be.visible')

        menu.irPara(locator.menu.pagina_produtos)
        produto.buscarProduto(produtoBuscado)
        cy.get(locator.add_carrinho).click()
        menu.irParaPaginaCarrinho()

        cy.get(locator.carrinho_titulo).should('have.text', 'Shopping Cart')
        cy.contains('Proceed To Checkout').click()
        cy.get('#address_delivery').should('contain', randomAddress)
        cy.get('.cart_description').should('contain', 'Blue Top')
        cy.get('.form-control').type(faker.lorem.lines(2))

        menu.irPara(locator.menu.pagina_pagamento)

        pagamento.preencherInfoPagamento(randomCardName, randomCardNumber, randomCardCVC)
        
        cy.get(locator.label_confirma_compra).should('have.text', 'Congratulations! Your order has been confirmed!')

        exclusao.deletarConta()
    });
});