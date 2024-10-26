import { faker } from '@faker-js/faker';

class Contato {
    preencherFormularioContato(){
        cy.get('[data-qa="email"]').type('thiagonsv@gmail.com')
        cy.get('[data-qa="name"]').type('Italo')
        cy.get('[data-qa="subject"]').type('Ajuda!')
        cy.get('[data-qa="message"]').type(faker.lorem.paragraph(5))
        cy.fixture('example.json').as('arquivo')    
        cy.get('input[name="upload_file"]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click()
    }
}

export default new Contato