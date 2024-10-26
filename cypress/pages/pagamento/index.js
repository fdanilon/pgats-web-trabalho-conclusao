class Pagamento {
  preencherInfoPagamento(nomeCartao, numeroCartao, cvcCartao) {
    cy.get('[data-qa="name-on-card"]').type(nomeCartao);
    cy.get('[data-qa="card-number"]').type(numeroCartao);
    cy.get('[data-qa="cvc"]').type(cvcCartao);
    cy.get('[data-qa="expiry-month"]').type("08");
    cy.get('[data-qa="expiry-year"]').type("2029");
    cy.get('[data-qa="pay-button"]').click();
  }
}

export default new Pagamento();
