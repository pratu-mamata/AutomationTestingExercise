class LoginPage {

    filluserName(name){
        cy.get("#username").type(name);
    }

    fillPassword(password) {
        cy.get("#password").type(password);
    }

    loginBtnClick(){
        cy.get("button[type='submit']").click();
    }

    loginWithCredential(username, password){
        this.filluserName(username);
        this.fillPassword(password);
        this.loginBtnClick();
    }

    getMessage() {
        return cy.get('#flash-messages div').invoke('text')
        .then(text => text.replace('×', '').trim());
    }

    verifyErrorMessageVisibility() {
        cy.get('#flash').should('be.visible');
        cy.get('#flash').should('have.class', 'error');
    }

}

export default new LoginPage();