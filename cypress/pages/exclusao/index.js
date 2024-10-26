import locator from "../../support/locators.js";
import menu from "../menu/index.js";

class Exclusão {
  deletarConta() {
    menu.irPara(locator.menu.pagina_deletar_conta);
    cy.get('[data-qa="account-deleted"]').should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new Exclusão();
