class Produto{
    buscarProduto(nomeProduto){
        cy.get('#search_product').type(nomeProduto)
        cy.get('#submit_search').click()
    }
}

export default new Produto()