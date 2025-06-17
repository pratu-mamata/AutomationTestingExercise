import login from "../pageObject/loginPage";
import loggedIn from "../pageObject/loggedInPage";

describe('Simple Automated Test Suite for a Login Functionality', function() {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('testData').then((data) => {
          cy.wrap(data).as('testData');
        });
    });
    
    it("Successful login with valid credentials", function() {
        const username = this.testData.validCredential.username;
        const password = this.testData.validCredential.password;
        login.loginWithValidCredential(username, password);
        loggedIn.getMessage().then((msg) => {
            expect(msg).to.eq('You logged into a secure area!');
        });
        loggedIn.verifyLogoutButtonVisible();
    })

    it("Failed login with invalid username", function() {
        const username = this.testData.invalidCredential.username;
        const password = this.testData.validCredential.password;
        login.loginWithValidCredential(username, password);
        login.getMessage().then((msg) => {
            expect(msg).to.eq('Your username is invalid!');
        });
        loggedIn.verifyLogoutButtonNotVisible();
    })

    it("Failed login with invalid password", function() {
        const username = this.testData.validCredential.username;
        const password = this.testData.invalidCredential.password;
        login.loginWithValidCredential(username, password);
        login.getMessage().then((msg) => {
            expect(msg).to.eq('Your password is invalid!');
        });
        loggedIn.verifyLogoutButtonNotVisible();
    })
    

})