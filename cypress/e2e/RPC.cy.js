describe('Dropdown Test and Verify Game History', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8082/')

    cy.get('username').type('TestName');

    cy.get('start-game-button').click();


    for(var i = 0; i < 5; i++)
      {
      cy.get('user-selection').then($dropdown => {
        const option = $dropdown.find('option')
        const randomIndex = Math.floor(Math.random() * option.length);

        cy.wrap($dropdown).select(options[randomIndex].value);
      })

      cy.get("go-button")

      cy.get('game-history').should('contain', 'TestName')
      cy.get('game-history').should('contain', i+1)
      }
  })
})