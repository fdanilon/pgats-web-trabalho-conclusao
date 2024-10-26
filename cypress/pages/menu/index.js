class Menu {
    irParaPaginaInicial(){
        cy.get("a[href='/']").eq(1).click()
    }
    
    irParaPaginaTestCases() {        
        cy.get('a[href="/test_cases"]').eq(0).click()
    }

    irParaPaginaCarrinho(){
        cy.get('a[href="/view_cart"]').eq(1).click()
    }

    irPara(destino){
        cy.get(destino).click()
    }
}

export default new Menu()