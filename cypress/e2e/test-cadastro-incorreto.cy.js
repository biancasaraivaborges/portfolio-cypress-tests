describe('Página de cadastro', () => {
  it('Preencher os campos do formulário de forma incorreta', () => {
    cy.visit('http://localhost:4200/#home') 
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    //Primeiro passo recriar comportamento de clicar no registro para todas as mensagens serem aprensetadas. 
    //Depois de direcionar para página de Login, direcionar para página de Registro e clicar 2x no botão para aparecer as mensagens.
    
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
    //Comportamento do cypress de encontrar a mensagem e ver se está visível
    //Replicar isto para os outros campos para verificar todas as mensagens. 
   
  })
})


