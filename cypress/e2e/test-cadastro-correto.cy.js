describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('a', 'Register now').click();
      //contains é uma poderosa ferramenta para nos ajudar com a localização dos elementos. 
      //Além de simples de usar, ele é preciso na busca, desde que indiquemos o seletor adequado.
      cy.get('[formcontrolname="email"]').type('catarina@email.com.br');
      cy.get('[formcontrolname="fullName"]').type('Catarina Pessoa');
      cy.get('[formcontrolname="userName"]').type('catarinap');
      cy.get('[formcontrolname="password"]').type('catarina123');
      cy.contains('button', 'Register').click();
    })
  })
  