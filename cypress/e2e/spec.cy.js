describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    
    //fill form
    cy.get('#firstName').type('Kristaps');
    cy.get('#lastName').type('Fedorovics');
    cy.get('#userEmail').type('kristaps@kristaps.lv');
    cy.get('[name=gender][value=Male]').check({ force: true });
    cy.get('#userNumber').type('123456789');
    cy.get('#currentAddress').type('address 1, town');
    cy.get('[for=hobbies-checkbox-3]').click();
    cy.get('#state').click().get('#react-select-3-option-0').click();
    cy.get('#city').click().get('#react-select-4-option-0').click();
    
    //calendar
    cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select('1930');
      cy.get('.react-datepicker__month-select').select('February');
      cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
      cy.get('.subjects-auto-complete__value-container').click().type('Economics{enter}');
    
    //upload file
    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'image1.jpg',
      mimeType: 'text/plain',
      lastModified: Date.now(),
    })

    cy.get('#submit').click();

    //validation
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text','Kristaps Fedorovics');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','kristaps@kristaps.lv');
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text','Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text','123456789');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('have.text','28 February,1930');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text','Economics');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text','Music');
    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('have.text','image1.jpg');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text','address 1, town');
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text','NCR Delhi');
  })
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
    });
})

