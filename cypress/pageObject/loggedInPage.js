class LoggedInPage {

    getMessage() {
        return cy.get('#flash-messages div').invoke('text')
        .then(text => text.replace('×', '').trim());
    }

    verifyLogoutButtonVisible() {
        cy.get("a[class*='button']").should('be.visible');
    }

    verifyLogoutButtonNotVisible() {
        cy.get("a[class*='button']").should('not.exist');
    }

}

export default new LoggedInPage();