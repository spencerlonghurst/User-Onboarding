const firstnameInput = () => cy.get('input[name="firstname"]');
const lastnameInput = () => cy.get('input[name="lastname"]');
const passwordInput = () => cy.get('input[name="password"]');
const emailInput = () => cy.get('input[name="email"]');
const randomInput = () => cy.get('input[name="someRandomName"]');
const genderSelect = () => cy.get('select#selectGender');
const occupationSelect = () => cy.get('select#selectOccupation');
const termsRadio = () => cy.get('[type="radio"].termsRadio');
const submitBtn = () => cy.get('button[id="submitButton"]');

describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002");
  });

  it("Sanity Test", () => {
    expect(1 + 2).to.equal(3);
  });

  it("Do the elements show?", () => {
    firstnameInput().should("exist");
    lastnameInput().should("exist");
    passwordInput().should("exist");
    emailInput().should("exist");
    randomInput().should("not.exist");
  });

  describe("Filling out the input boxes", () => {
    it("Can type in the first name", () => {
      firstnameInput()
        .should("have.value", "")
        .type("Joe")
        .should("have.value", "Joe");
    });

    it("Can type in the first name", () => {
      firstnameInput()
        .should("have.value", "")
        .type("Joe")
        .should("have.value", "Joe");
    });

    it("Can type in the last name", () => {
      lastnameInput()
        .should("have.value", "")
        .type("Dirt")
        .should("have.value", "Dirt");
    });

    it("Can type in the password", () => {
      passwordInput()
        .should("have.value", "")
        .type("SOMEPASSWORD")
        .should("have.value", "SOMEPASSWORD");
    });

    it("Can type in an email", () => {
      emailInput()
        .should("have.value", "")
        .type("joe@dirt.co")
        .should("have.value", "joe@dirt.co");
    });

    it('Can I select a Gender?', () => {
      genderSelect()
        .select('Male')
        .select('Female')
        .select('Prefer not to say')
    })

    it('Can I select an Occupation?', () => {
      occupationSelect()
        .select('Student')
        .select('Teacher/Instructor')
        .select('Full Time Web Engineer')
        .select('Retired Engineer')
    })
  });

  describe('Does the terms button work?', () => {
    it('Can the Terms and Conditions button be clicked?', () => {
      termsRadio()
        .check("theTerms")
    })
  })

  describe('Submitting the data', () => {
    it('Will the submit button submit all of the data?', () => {
      firstnameInput().type("John")
      lastnameInput().type("Smith")
      passwordInput().type("MYPASSWORD")
      emailInput().type("john.smith.co")

      termsRadio().check('theTerms')
      submitBtn().click()
    })
  })

  describe('Check if an empty field', () => {
    it('check if input is empty', () => {
      firstnameInput().should('have.value', '')
      lastnameInput().should('have.value', '')
      passwordInput().should('have.value', '')
      emailInput().should('have.value', '')
    })
    
  })
});






